# Tuning the visualisation for a dataset (browser-driven)

For AI agents that can drive a web browser (Playwright, Puppeteer, Chrome DevTools MCP, Claude in
Chrome, ...). Goal: find good view settings for a dataset by changing them in the running app,
looking at screenshots, and saving the result as the dataset's `config.json`. Read
[data-folder-setup.md](data-folder-setup.md) first (files, `config.json` keys, preset fields and
first-guess defaults); this guide is the loop that turns those guesses into a verified config.

## When to do this

After the data is in place and loads. A config written from the data profile alone (section 4.6 of
the data guide) is a good start, but colours, sizes and edge opacity only look right or wrong on
screen. A few rounds of "change, look, compare" usually beat any rule.

## Requirements

- The deployment served locally: `python3 server.py` in the deployment folder
  (`http://127.0.0.1:8887/`), or any static server.
- A browser **with WebGPU** (Chrome / Edge 113+, a real GPU). Headless browsers often have no
  WebGPU: run headed, or start Chromium with `--enable-unsafe-webgpu --enable-features=Vulkan`
  (Linux) and check that the graph renders in the first screenshot.
- Keep the tab **in the foreground**: a background tab pauses rendering and screenshots go stale.
- A viewport of about 1440 x 900, the same for every screenshot, so they are comparable.

## The automation API

The app exposes `window.asdf10k` for scripts. Everything you change goes through **commands** (the
same ones the app's buttons use), so a change is validated and behaves exactly like a user's
click. Events are only for waiting.

| Member | Use |
|---|---|
| `await asdf10k.whenReady()` | resolves when a dataset is loaded and rendered - call it after every page load |
| `asdf10k.getState()` | `{ dataset, nodes, edges, selected, loading }` - check `nodes > 0` and `loading === false` |
| `await asdf10k.runCommand(id, params)` | run a command; returns `{ ok: true, result }` or `{ ok: false, error }` (never throws) |
| `asdf10k.listCommands()` | every command with its description and JSON Schema |
| `asdf10k.subscribe(event, fn)` | listen to app events, e.g. `dataset:loaded`, `dataset:changed`; returns an unsubscribe function |
| `asdf10k.version`, `asdf10k.build` | app version and build |

Commands you need:

| Command | Params | Use |
|---|---|---|
| `settings.list` | `category?` (`Nodes`, `Edges`, `Layout`, `Highlight`, `Navigation`) | every setting id with type, options or range and current value - take names from here, never guess |
| `settings.set` | `id`, `value` | change one setting; dropdown values must be one of the listed options, numbers within the range |
| `layout.next`, `layout.prev` | - | cycle the precomputed layouts (or `settings.set` `layout.nodeLayout`) |
| `nav.resetView` | - | camera back to the overview - call before every comparison screenshot |
| `subset.set` | `ids` | select nodes, to judge how a selection stands out (`subset.clear` to reset) |
| `nav.flyToSubset` | - | camera to the selection |
| `config.export` | `presetName?`, `includeLocalStorage?` | a ready `config.json` object of the current state; the current view is first saved as a preset (`presetName`, else `default`, overwritten every time) and becomes `lastUsedPreset` |
| `dataset.switch` | `key` | switch dataset (when the deployment has several) |

Example, as JavaScript evaluated in the page:

```js
await asdf10k.whenReady();
const nodes = (await asdf10k.runCommand('settings.list', { category: 'Nodes' })).result;
await asdf10k.runCommand('settings.set', { id: 'nodes.colorAttribute', value: 'layer_c' });
await asdf10k.runCommand('settings.set', { id: 'nodes.sizeAttribute', value: 'degree_n' });
await asdf10k.runCommand('settings.set', { id: 'nodes.sizeMethod', value: 'quantile' });
await asdf10k.runCommand('nav.resetView');
await new Promise((r) => setTimeout(r, 800));   // let the view settle, then take a screenshot
```

The setting ids and their preset fields:

| Setting id | Preset field (config.json) |
|---|---|
| `nodes.colorAttribute` / `nodes.colorMethod` | `nodeColorAttribute` / `nodeColorScalingMethod` |
| `nodes.sizeAttribute` / `nodes.sizeMethod` | `nodeSizeAttribute` / `nodeSizeScalingMethod` |
| `nodes.sizeScaling`, `nodes.minSize` | `nodeSizeScaling`, `nodeMinSize` |
| `edges.colorAttribute` / `edges.colorMethod` | `edgeColorAttribute` / `edgeColorScalingMethod` |
| `edges.widthAttribute` / `edges.widthMethod` | `edgeWidthAttribute` / `edgeWidthScalingMethod` |
| `edges.widthScaling`, `edges.minWidth` | `edgeWidthScaling`, `edgeMinWidth` |
| `edges.opacity`, `edges.blending` | `edgeOpacity`, `edgeBlending` |
| `edges.cutoffAttribute`, `edges.cutoff` | `edgeCutoffAttribute`, `edgeCutoff` (the cut-off is offered once a column is chosen) |
| `edges.alphaAttribute`, `edges.minAlpha`, `edges.maxAlpha`, `edges.fadeDistance` | `edgeAlphaAttribute`, `edgeAlphaMin`, `edgeAlphaMax`, `edgeFadeDistance` |
| `layout.nodeLayout` | top-level `nodeLayout` |
| `highlight.*` | preset highlight fields (edit them in the config; see below) |

You do not have to map them yourself: `config.export` writes the current values into the preset.

## The tuning loop

Work in this order - each step changes how the next one looks:

1. **Layout.** Screenshot every layout (`settings.list` -> `layout.nodeLayout` options;
   `nav.resetView` after each). Pick the one where groups and hubs separate best and the graph
   fills the view without a dense blob in the middle.
2. **Node colour.** Try the 2-4 best candidate columns from the data profile (categories with 2-10
   values; a key numeric result). For a numeric column try `linear`, `quantile` and (`log` |
   `symlog`) and keep the one where colours are spread over the whole graph, not one colour for
   90 % of the nodes.
3. **Node size.** `degree_n` (or an importance score) with `linear` vs `quantile`. Then
   `nodes.sizeScaling`: increase until nodes start to overlap in dense regions, then go one step
   back. `nodes.minSize` so that the smallest nodes are still visible as dots.
4. **Edges.** `edges.opacity` first (the biggest effect): from the density rule of thumb, adjust
   until the structure is visible but nodes are not hidden behind a haze. Then `edges.colorAttribute`
   (an edge category if there is one), `edges.widthScaling` / `edges.minWidth`, and
   `edges.cutoff` only for very dense graphs.
5. **Selection.** Select a meaningful group (`subset.set` with a module's ids, or one hub plus its
   neighbours via `subset.expandOneHop`), screenshot overview and `nav.flyToSubset`. The selection
   must stand out; if not, raise the highlight fields in the config (below).
6. **Save.** `config.export { presetName: "Overview" }`. Repeat steps 2-5 for one or two
   alternative views worth shipping ("Fold change", "Pathways") and export again with another
   name: each export contains all presets saved so far; keep the last one.

Change one thing at a time, keep the screenshot of the best value of every step, and compare
candidates side by side at the same camera position.

## What a good view looks like

Judge every screenshot with these questions:

- **Structure:** clusters, hubs and bridges are visible at the overview; the graph uses most of the
  screen; no single blob hides the rest.
- **Colour:** the colour carries meaning (a category users care about, or a value), groups are
  distinguishable, no colour dominates unintentionally; at most ~10 categories.
- **Size:** important nodes are clearly larger, but even large nodes do not cover their neighbours;
  small nodes are still visible.
- **Edges:** connections are readable where it matters; edges do not form a haze that hides nodes;
  the dark background is still visible between edges.
- **Selection:** a selected group stands out immediately, its edges are traceable, the rest stays
  visible as context.
- **Text and windows:** open windows (if any) do not cover the important part of the graph.

If two candidates are close, prefer the simpler one (fewer methods, default blending).

## Writing config.json

```js
const r = await asdf10k.runCommand('config.export', { presetName: 'Overview' });
// r.result is the config object: save it as data/<folder>/config.json (JSON.stringify(r.result, null, 2))
```

Then edit the file:

- Keep `version`, `exportType`, `dataset`, `nodeLayout`, `presets` (only the presets you want to
  ship), `lastUsedPreset`; keep `tooltips`, `window_molecular`, libraries and `openWindows` if you
  set them up on purpose; remove anything you did not intend (e.g. windows you opened for testing).
- Highlight look (step 5): set `highlightEdgesEnabled`, `fadeOtherEdgesEnabled`,
  `fadeOtherEdgesOpacity`, `highlightNodeSizeScale`, `bloomMode` in the preset (values in the data
  guide, 4.2 / 4.3). The export puts the current view into the preset `default` and makes it
  `lastUsedPreset`.

## Verify

Open the deployment in a **fresh browser context** (a new private window or a new Playwright
context: no stored settings), `await asdf10k.whenReady()`, `nav.resetView`, screenshot. It must
look like your best screenshot. Check the browser console for warnings (unknown columns, ids,
keys). Only then is the config done.

## Pitfalls

- Settings you change in a browser are stored in that browser (local storage); they are not in the
  deployment until they are in `config.json`. Always verify in a fresh context.
- `config.export` with a `presetName` keeps that preset until the page reloads; presets are not
  stored in the browser, so the export holds the dataset's `config.json` presets plus the ones saved
  since the load. Only a new `config.json` makes them permanent.
- A dropdown value that is not in `settings.list`'s options is refused (`ok: false`): read the
  error, it lists what is allowed.
- Wait after every change (about half a second, more for large graphs) before the screenshot;
  changing colour or size methods rebuilds the meshes.
- Camera: always `nav.resetView` before comparison screenshots; otherwise you compare different
  views. Exported presets contain the camera of the moment you exported - reset it first.
- Headsets: the same config is used in VR / AR. Very thin edges and tiny nodes disappear in a
  headset; prefer slightly larger `nodeMinSize` and `edgeMinWidth` than on the desktop.
