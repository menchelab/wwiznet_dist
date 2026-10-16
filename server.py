#!/usr/bin/env python3
"""Local server for a wwiznet deployment: serves the app and its data, and forwards /agent-api/ to
the BigBrainz20k agent backend - the same layout a production web server uses, so one config.json
works locally and live (no agentBackendUrl needed).

    python3 server.py                       # http://127.0.0.1:8887/  (backend at http://127.0.0.1:8787/api)
    python3 server.py --port 8000
    python3 server.py --host 0.0.0.0        # reachable from other machines (careful: no authentication)
    python3 server.py --backend http://lab-box:8787/api

Environment: WWIZNET_PORT, WWIZNET_HOST, AGENT_BACKEND (same meaning as the options).
Only the Python standard library is used.
"""

import argparse
import http.client
import http.server
import os
import socketserver
import sys
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).parent.resolve()
PROXY_PREFIX = "/agent-api"
HOP_HEADERS = {"connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailers", "transfer-encoding", "upgrade", "host"}

# Windows often maps .js to text/plain; module scripts need a JavaScript MIME type.
_MIME = http.server.SimpleHTTPRequestHandler.extensions_map.copy()
_MIME.update({".js": "text/javascript", ".mjs": "text/javascript", ".wasm": "application/wasm", ".woff2": "font/woff2", ".tsv": "text/tab-separated-values"})


def make_handler(backend: urllib.parse.SplitResult):
    class Handler(http.server.SimpleHTTPRequestHandler):
        extensions_map = _MIME
        protocol_version = "HTTP/1.1"

        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(ROOT), **kwargs)

        def log_message(self, fmt, *args):  # quieter: only errors and proxy calls
            if self.path.startswith(PROXY_PREFIX) or (args and str(args[1])[:1] in "45"):
                sys.stderr.write("%s %s\n" % (self.log_date_time_string(), fmt % args))

        # --- static files ---------------------------------------------------------------------
        def do_GET(self):
            if self.path.startswith(PROXY_PREFIX):
                return self.proxy()
            if self.path.split("?")[0] == "/favicon.ico" and not (ROOT / "favicon.ico").is_file():
                self.send_response(204)
                self.send_header("Content-Length", "0")
                self.end_headers()
                return
            return super().do_GET()

        def end_headers(self):
            if not self.path.startswith(PROXY_PREFIX):
                # data and app files change between updates: always revalidate
                self.send_header("Cache-Control", "no-cache")
            super().end_headers()

        def do_POST(self):
            return self.proxy() if self.path.startswith(PROXY_PREFIX) else self.send_error(405)

        def do_PUT(self):
            return self.proxy() if self.path.startswith(PROXY_PREFIX) else self.send_error(405)

        def do_DELETE(self):
            return self.proxy() if self.path.startswith(PROXY_PREFIX) else self.send_error(405)

        def do_OPTIONS(self):
            return self.proxy() if self.path.startswith(PROXY_PREFIX) else self.send_error(405)

        # --- /agent-api/ -> backend (streams responses, so the event stream works) -------------
        def proxy(self):
            target = backend.path.rstrip("/") + self.path[len(PROXY_PREFIX):]
            length = int(self.headers.get("Content-Length") or 0)
            body = self.rfile.read(length) if length else None
            headers = {k: v for k, v in self.headers.items() if k.lower() not in HOP_HEADERS}
            conn_cls = http.client.HTTPSConnection if backend.scheme == "https" else http.client.HTTPConnection
            try:
                conn = conn_cls(backend.hostname, backend.port or (443 if backend.scheme == "https" else 80), timeout=3600)
                conn.request(self.command, target, body=body, headers=headers)
                resp = conn.getresponse()
            except OSError as e:
                msg = f"agent backend not reachable at {backend.geturl()} ({e}). Start it: see docs/for_agents/agent-backend.md".encode()
                self.send_response(502)
                self.send_header("Content-Type", "text/plain; charset=utf-8")
                self.send_header("Content-Length", str(len(msg)))
                self.end_headers()
                self.wfile.write(msg)
                return
            self.send_response(resp.status, resp.reason)
            streaming = "text/event-stream" in (resp.getheader("Content-Type") or "")
            for k, v in resp.getheaders():
                if k.lower() not in HOP_HEADERS and not (streaming and k.lower() == "content-length"):
                    self.send_header(k, v)
            if streaming:
                self.send_header("Cache-Control", "no-cache")
                self.send_header("Connection", "close")
                self.close_connection = True
            self.end_headers()
            try:
                while True:
                    chunk = resp.read1(65536) if streaming else resp.read(65536)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    if streaming:
                        self.wfile.flush()
            except (BrokenPipeError, ConnectionResetError):
                pass  # the browser closed the event stream
            finally:
                conn.close()

    return Handler


class Server(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def main():
    p = argparse.ArgumentParser(description="Serve a wwiznet deployment locally (app, data, /agent-api proxy).")
    p.add_argument("--port", type=int, default=int(os.environ.get("WWIZNET_PORT", "8887")))
    p.add_argument("--host", default=os.environ.get("WWIZNET_HOST", "127.0.0.1"), help="127.0.0.1 (default) = this machine only")
    p.add_argument("--backend", default=os.environ.get("AGENT_BACKEND", "http://127.0.0.1:8787/api"), help="agent backend base URL ending in /api")
    a = p.parse_args()
    backend = urllib.parse.urlsplit(a.backend)
    if backend.scheme not in ("http", "https") or not backend.hostname:
        sys.exit(f"--backend must be an http(s) URL, got {a.backend!r}")
    with Server((a.host, a.port), make_handler(backend)) as httpd:
        shown = "127.0.0.1" if a.host in ("", "0.0.0.0") else a.host
        print(f"Serving {ROOT} at http://{shown}:{a.port}/")
        print(f"/agent-api -> {a.backend}  (the BigBrainz20k agent backend; the app works without it)")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
