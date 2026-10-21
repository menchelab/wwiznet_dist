# Connecting the AI agent (BigBrainz20k) to a deployment

For people and AI agents setting up a wwiznet deployment (the built app from
[menchelab/wwiznet_dist](https://github.com/menchelab/wwiznet_dist)) who want the **BigBrainz20k**
agent window to work. The app runs without it; only that window needs a backend.

## What it is

BigBrainz20k is a chat window in the app ("+" menu, also in the VR / AR ring menu) backed by a
Claude agent that runs in a separate server, the **agentic backend**:
[menchelab/asdf10k-agentic-backend](https://github.com/menchelab/asdf10k-agentic-backend) (MIT). The
agent sees the loaded graph and the user's selection, analyses them with Python, and answers with
tables, figures, buttons that change the view, new node columns, node sets and reports. The
backend needs Node 20+, Python via `uv`, and Claude access (a Claude Code login or an Anthropic API
key). Voice input (push-to-talk) is optional and needs whisper.cpp.

## Steps

1. **Run the backend** - follow its README, section "Quick start":
   https://github.com/menchelab/asdf10k-agentic-backend#quick-start . Check
   `curl http://127.0.0.1:8787/api/health` answers `"ok": true`. For a first test without Claude
   access: `AGENT_FAKE=1 npm start` (a scripted agent).
2. **Let the app reach it** - the app calls `/agent-api` on its own origin by default, so the
   deployment's web server forwards that path to the backend:
   - local / same machine: `python3 server.py` in the deployment folder does this already (it
     forwards `/agent-api/` to `http://127.0.0.1:8787/api`; `--backend <url>` for another address).
     No config change. Check `curl http://127.0.0.1:8887/agent-api/health`;
   - a deployment behind a web server (HTTPS, shared): reverse-proxy the path `/agent-api/` of the
     deployment to `http://127.0.0.1:8787/api/` (nginx / Caddy snippets in the backend README,
     section "Connecting the app"). No config key needed.
   - when the proxy is not possible, give the backend's absolute URL (ending in `/api`) once for the
     whole deployment in `data/index.json`: `"services": { "agent": { "url": "https://agent.example.org/api" } }`
     ([data-folder-setup.md](data-folder-setup.md), section 1). `agentBackendUrl` in a dataset's
     `config.json` still overrides it for that one dataset. An HTTPS site cannot call an `http://`
     URL, so do not put a local `http://127.0.0.1` URL into a deployment that is also served
     publicly.
3. **Check in the browser** - load the dataset, open "+" › BigBrainz20k. A green dot next to the
   session list = connected; a red banner "Backend not reachable at <url>" names the URL it tried. Send
   "hi": an answer within a few seconds means Claude access works too. A microphone button next to
   Send appears when voice input is set up.

## Laptop backend for headsets

Headsets open the HTTPS deployment; one laptop on the same network runs the backend.

1. Laptop: `AGENT_HOST=0.0.0.0 npm start` in the backend folder. Give the laptop a fixed address
   (DHCP reservation, or your own travel router: venue Wi-Fi often blocks traffic between devices).
2. Each headset, once: open `chrome://flags/#unsafely-treat-insecure-origin-as-secure`, enter the
   laptop's origin (e.g. `http://192.168.1.50:8787`), enable, relaunch the browser. The browser then
   lets the HTTPS page call that `http://` origin. Allow local network access if the browser asks.
3. Open the deployment with `?agent=http://192.168.1.50:8787/api` (base URL including `/api`).

The backend prints these links when it starts (`AGENT_APP_URL=<app URL>` makes them full links).
With Claude Code in the backend folder, "start the backend for https://your-app" runs its
`start-backend` skill: it starts the server and explains the links and the browser flag.

In a multiplayer session the driver's Agent window shares its session live ("Share live"): the
other clients open it read-only, each reading the backend directly - so every viewer needs step 2
and an `?agent=` URL too.

Anyone on that network can use the backend (no authentication): only on a network you trust.

## Rules

- **HTTPS deployments need an HTTPS backend.** A page served over HTTPS (any public site; a headset
  that opens the deployment by its network address rather than `localhost`) cannot call
  `http://...`; the `/agent-api/` proxy avoids this, since the browser only talks to the page's own
  origin.
- **Environment names:** the backend reads `AGENT_PORT` / `AGENT_HOST`, not `PORT` / `HOST` (conda
  and many shells set those for other purposes).
- **No authentication.** The backend listens on `127.0.0.1` by default. Do not open it to a network
  (`AGENT_HOST=0.0.0.0`) unless that network is trusted; whoever reaches it can run agent sessions on the
  backend machine with its Claude account.
- **One backend per lab is enough.** Sessions are per dataset; several deployments can share one
  backend if they reach it.
- The agent writes its files (figures, tables, reports) into the backend's sessions folder, not into
  the deployment. Reports appear in the app's Reports window.

## For agents doing the setup

If you are an AI agent asked to "set up the agent" for a user's deployment:

1. Ask where the deployment is served (local test or a web server with HTTPS) and whether the
   backend should run on the same machine.
2. Clone and start the backend as in its README (do not run it as root). If the user has no Claude
   Code login on that machine, ask them to run `claude` once and log in, or to provide an
   `ANTHROPIC_API_KEY` - never invent or reuse credentials.
3. Wire it up (step 2 above): for local setups just run the deployment's `server.py` (no data
   changes); for served deployments add the reverse-proxy location. Only if the proxy is impossible, set
   `services.agent.url` in `data/index.json` (not `agentBackendUrl` in every dataset).
4. Verify as in step 3, and report the URL and how to restart the backend (the README's "Running it
   permanently" section for a server).
