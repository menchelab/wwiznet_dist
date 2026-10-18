#!/usr/bin/env bash
# Update the wwiznet / asdf10k app files in a deployment from https://github.com/menchelab/wwiznet_dist.
# Usage (in the deployment folder):  ./update.sh [vX.Y.Z]     (default: latest = main branch)
# Replaces index.html, assets/, fonts/, docs/for_agents/, VERSION.json, update.sh, server.py.
# Never touches data/ or anything else.
set -euo pipefail

REPO="menchelab/wwiznet_dist"
VERSION="${1:-}"
if [[ -n "$VERSION" ]]; then
  URL="https://github.com/$REPO/archive/refs/tags/$VERSION.tar.gz"
else
  URL="https://github.com/$REPO/archive/refs/heads/main.tar.gz"
fi

command -v curl >/dev/null || { echo "curl is required"; exit 1; }
command -v tar >/dev/null || { echo "tar is required"; exit 1; }

OLD="none"
[[ -f VERSION.json ]] && OLD=$(sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' VERSION.json | head -1)

# WWIZNET_ARCHIVE=<url or local .tar.gz> overrides the download (testing, mirrors)
if [[ -n "${WWIZNET_ARCHIVE:-}" ]]; then URL="$WWIZNET_ARCHIVE"; fi

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
echo "Downloading $URL"
if [[ -f "$URL" ]]; then cp "$URL" "$TMP/app.tar.gz"; else curl -fsSL "$URL" -o "$TMP/app.tar.gz" || { echo "Download failed (unknown version?)"; exit 1; }; fi
tar -xzf "$TMP/app.tar.gz" -C "$TMP"
SRC=$(find "$TMP" -mindepth 1 -maxdepth 1 -type d | head -1)
[[ -f "$SRC/index.html" && -f "$SRC/VERSION.json" && -d "$SRC/assets" ]] || { echo "The download does not look like a wwiznet build; nothing changed."; exit 1; }

# app files only; data/ and everything else stay
rm -rf assets fonts docs/for_agents
cp -R "$SRC/assets" "$SRC/fonts" .
mkdir -p docs && cp -R "$SRC/docs/for_agents" docs/
cp "$SRC/index.html" "$SRC/VERSION.json" "$SRC/server.py" .
cp "$SRC/update.sh" ./update.sh.new && chmod +x ./update.sh.new && mv ./update.sh.new ./update.sh

NEW=$(sed -n 's/.*"version": *"\([^"]*\)".*/\1/p' VERSION.json | head -1)
echo "Updated wwiznet: $OLD -> $NEW"
[[ -f data/index.json || -f data/datasets.json ]] || echo "Note: data/index.json is missing - see docs/for_agents/data-folder-setup.md"
