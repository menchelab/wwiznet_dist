# wwiznet - 3D network explorer (built app)

This repository contains the **built web app** of the wwiznet / asdf10k 3D graph explorer: an
interactive 3D view of biological networks (proteins, transcripts, metabolites and their
interactions) in the browser and in VR / AR headsets (Meta Quest 3). It contains no data: you add
your own datasets in a `data/` folder next to the app and serve everything as static files.

Version: **0.8.0** (2026-10-16, build 5302290). Changes: [CHANGELOG.md](CHANGELOG.md).

## For AI agents

If a user asked you to set this up with their data, you can do everything from this repository:

1. Read **[docs/for_agents/data-folder-setup.md](docs/for_agents/data-folder-setup.md)** - the
   complete guide: `data/datasets.json`, the formats of `nodes.tsv` and `edges.tsv` (column-kind
   suffixes), and `config.json` with every key, built-in defaults and how to choose good ones.
2. If you can drive a browser, read **[docs/for_agents/visual-tuning.md](docs/for_agents/visual-tuning.md)**:
   tune colours, sizes, edges and layout in the running app through its `window.asdf10k` command
   API, compare screenshots, and export the result as `config.json`.
3. Optionally read **[docs/for_agents/custom-windows-guide.md](docs/for_agents/custom-windows-guide.md)**
   to ship guided windows with buttons (layouts, colours, selections, analysis windows), and
   **[docs/for_agents/agent-backend.md](docs/for_agents/agent-backend.md)** to connect the
   BigBrainz20k AI agent window to its backend ([menchelab/asdf10k-agentic-backend](https://github.com/menchelab/asdf10k-agentic-backend)).
4. Get the app files (step "Set up a deployment" below), convert the user's data into
   `data/<folder>/nodes.tsv` and `edges.tsv`, write `data/datasets.json` and a first `config.json`,
   start `python3 server.py`, check the dataset loads (the browser console lists problems), then
   tune the view (step 2).

Ask the user for their data files and what the nodes and edges are; do not invent data.

## Set up a deployment

```bash
# 1. the app files (or download the ZIP of this repository and unpack it)
git clone https://github.com/menchelab/wwiznet_dist.git my-network
cd my-network
rm -rf .git        # optional: start your own repository for the deployment

# 2. your data
mkdir -p data/mydata
#    put nodes.tsv and edges.tsv into data/mydata/ (formats: docs/for_agents/data-folder-setup.md)
cat > data/datasets.json <<'EOF'
{ "version": 1, "default": "mydata",
  "datasets": [ { "key": "mydata", "folder": "mydata", "label": "My network" } ] }
EOF

# 3. look at it
python3 server.py          # http://127.0.0.1:8887/
```

Any static web server works (nginx, GitHub Pages, `npx serve`); `server.py` only fixes the
JavaScript MIME type that some Windows Python installations get wrong. WebXR needs HTTPS (or
`localhost`), so serve deployments for headsets over HTTPS.

Layout of a deployment:

```
index.html, assets/, fonts/     # the app (replaced by updates)
docs/for_agents/                # guides (replaced by updates)
VERSION.json, update.sh, server.py
data/                           # YOUR data - never touched by updates
  datasets.json
  <folder>/nodes.tsv, edges.tsv, config.json, custom_windows/
```

## Update an existing deployment

Run in the deployment folder (needs `bash`, `curl`, `tar`):

```bash
./update.sh            # latest version
./update.sh v0.7.0     # a specific version (tags of this repository)
```

It replaces `index.html`, `assets/`, `fonts/`, `docs/for_agents/`, `VERSION.json`, `update.sh` and
`server.py`, and leaves `data/` and everything else alone. A deployment that does not have
`update.sh` yet can run it directly:

```bash
curl -fsSL https://raw.githubusercontent.com/menchelab/wwiznet_dist/main/update.sh | bash
```

Then commit and push your deployment repository as usual.
