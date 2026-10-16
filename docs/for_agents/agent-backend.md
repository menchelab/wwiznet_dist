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
2. **Tell the app where it is** - one of:
   - same machine, app served over plain HTTP (e.g. `python3 server.py`): add to the dataset's
     `data/<folder>/config.json`
     ```json
     "agentBackendUrl": "http://127.0.0.1:8787/api"
     ```
     (the URL ends with `/api`; every dataset that should have the agent needs the key);
   - a deployment behind a web server (HTTPS, shared): reverse-proxy the path `/agent-api/` of the
     deployment to `http://127.0.0.1:8787/api/` (nginx / Caddy snippets in the backend README,
     section "Connecting the app"); no config key needed, the app uses `/agent-api` by default.
3. **Check in the browser** - load the dataset, open "+" › BigBrainz20k. A green dot next to the
   session list = connected; a red banner "Backend not reachable at <url>" names the URL it tried. Send
   "hi": an answer within a few seconds means Claude access works too. A microphone button next to
   Send appears when voice input is set up.

## Rules

- **HTTPS deployments need an HTTPS backend.** A page served over HTTPS (any public site; a headset
  that opens the deployment by its network address rather than `localhost`) cannot call
  `http://...`; use the reverse proxy. Plain-HTTP setups (local testing)
  can use the absolute URL.
- **No authentication.** The backend listens on `127.0.0.1` by default. Do not open it to a network
  (`HOST=0.0.0.0`) unless that network is trusted; whoever reaches it can run agent sessions on the
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
3. Wire it up (step 2 above): `agentBackendUrl` in each dataset's `config.json` for local setups,
   or the reverse-proxy location for served deployments.
4. Verify as in step 3, and report the URL and how to restart the backend (the README's "Running it
   permanently" section for a server).
