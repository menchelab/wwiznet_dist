# Preparing data for an asdf10k deployment

For people and AI agents who have only the **built app** (the `dist/` folder) and need to add
datasets: the files, their formats, the dataset list, and the optional `config.json`. You do not
need the source code. Companion guides: [visual-tuning.md](visual-tuning.md) (tune the view in a
browser and export it as config.json) and [custom-windows-guide.md](custom-windows-guide.md)
(interactive windows shipped with a dataset).

## What the app is

asdf10k is a browser app (also usable in VR / AR on a Quest 3) that shows a network as a 3D graph:
nodes with positions and columns, edges between them. Users colour and size nodes by columns,
switch between precomputed layouts, select subsets and open analysis windows. Everything it shows
comes from plain files in `dist/data/`.

## Layout of `dist/`

```
dist/
  index.html, assets/ ...         # the app - do not touch
  data/
    datasets.json                 # REQUIRED: the list of datasets
    <folder>/                     # one folder per dataset (subfolders allowed)
      nodes.tsv                   # REQUIRED
      edges.tsv                   # REQUIRED
      config.json                 # optional: initial view, presets, windows, tooltips ...
      custom_windows/             # optional: interactive markdown windows (see the other guide)
      cache/                      # optional: offline metadata cache (built with a dev tool, skip it)
```

The app is served as static files (any web server, `npx serve dist`, nginx, ...). Open
`http://host/?dataset=<key>` to load a dataset; without the parameter the `default` from
`datasets.json` loads. Changes to `data/` are picked up on the next page reload, no rebuild.

## 1. `data/datasets.json`

Lists every dataset. Without it (or with an invalid file) the app shows "No datasets configured"
and loads nothing.

```json
{
  "version": 1,
  "default": "cml",
  "datasets": [
    { "key": "cml", "folder": "cml", "label": "CML interactome" },
    { "key": "cml_v2", "folder": "projects/cml/v2", "label": "CML interactome v2" },
    { "key": "test", "folder": "test", "label": "Small test graph", "hidden": true }
  ]
}
```

| Field | Rules |
|---|---|
| `version` | always `1` |
| `default` | key loaded when the URL has no `?dataset=`; optional, default = first non-hidden entry |
| `key` | lowercase letters, digits, `_`, `-`; starts with a letter or digit; unique. It is the dataset's identity (URL, saved settings) - do not rename it later, or add the old key to `aliases` |
| `folder` | path below `data/`, subfolders allowed (`projects/cml/v2`), no leading `/`, no `..` |
| `label` | shown in the dataset dropdown; optional, default = key |
| `aliases` | optional list of former keys that should still open this dataset |
| `hidden` | optional `true`: not in the dropdown, still loadable via `?dataset=<key>` |

## 2. `nodes.tsv`

Tab-separated, UTF-8, one header row, one row per node.

| Column | Required | Meaning |
|---|---|---|
| `id` (or `_id`) | yes, first column | unique node id, used by edges, URLs, subsets, reports. Keep it stable and readable, e.g. `CR1_p` (protein), `CR1_t` (transcript), `Pyruvate_m` (metabolite) |
| `x`, `y`, `z` | recommended | the base ("default") layout; missing = random positions |
| `x_<name>`, `y_<name>`, `z_<name>` | optional | additional layouts; `<name>` is the layout name in the app (e.g. `x_fa2_2` ... -> layout `fa2_2`). For a 2D layout write `z_<name>` = 0 |
| `color` | optional | `#rrggbb` base colour of the node ("original" colouring) |
| `name` | recommended | display name (gene symbol, metabolite name); may repeat |
| any other column | optional | a node attribute; its **suffix decides its kind** (table below) |

Positions may use any scale: the app normalises them. Empty cells are allowed and mean "no value".

**Column kinds by suffix** - choose the suffix by what the column is for:

| Suffix | Kind | Example values | Used for |
|---|---|---|---|
| `_n` | number | `3`, `0.25`, `-1.7` | node size, colour gradient, distributions, scatter, formulas (`degree_n>3`) |
| `_norm` | number 0..1 | `0.42` | like `_n` (already normalised) |
| `_c` | category (one value) | `protein`, `metabolite` | colour per value, distributions, enrichment, filters |
| `_a` | list of values, comma-separated | `Metabolism,Immune System` | colour, distributions, UpSet, enrichment (e.g. pathways, GO terms) |
| `_kv` | key:value pairs, comma-separated | `liver:2.1,kidney:0.4` | distributions, key:value table (e.g. expression per tissue) |
| `_c_kv` | category key:value pairs | `CML:up,AML:down` | like `_kv` with category values |
| no suffix | text | free text | tables and tooltips only |

Recommended columns for biological networks: `name`, `degree_n`, a node type as `layer_c` or
`type_simple_c` (`protein` / `transcript` / `metabolite`), database ids as `_c` columns
(`protein_id_c` = UniProt accession, `metabolite_id_c` = KEGG id like `C00022`), annotations as `_a`
columns (`pathways_a`, `GO_BP_a`, `kegg_a`), results as `_n` / `_c` (`log2fc_n`, `padj_n`,
`cluster_c`). Never put a tab or a newline inside a cell; inside `_a` / `_kv` values commas
separate items, so items must not contain commas.

Example:

```tsv
id	name	layer_c	degree_n	pathways_a	x	y	z	x_fa2_2	y_fa2_2	z_fa2_2
CR1_p	CR1	protein	4	Complement Cascade,Immune System	0.1	2.3	-1.2	-894.2	610.9	0
Pyruvate_m	Pyruvate	metabolite	6	Metabolism	1.5	-0.4	0.8	-87.8	181.9	0
```

## 3. `edges.tsv`

Tab-separated, one header row, one row per edge.

| Column | Required | Meaning |
|---|---|---|
| `source`, `target` | yes | node ids from `nodes.tsv` (edges with unknown ids are skipped) |
| `weight` | optional | number, default 1 (used for edge cutoff and transparency) |
| `color` | optional | `#rrggbb`; default = mix of the two node colours |
| any other column | optional | edge attribute with the same suffix rules, e.g. `edge_type_c` (`protein-protein`, `protein-metabolite`), `score_n`; usable for edge colour and width |

Edges are undirected for display. Example:

```tsv
source	target	edge_type_c	weight
CR1_p	FCN3_p	protein-protein	0.9
PC_p	Pyruvate_m	protein-metabolite	1
```

## 4. `config.json` (optional, recommended)

`config.json` in the dataset folder sets the state the app starts in when the dataset loads: the
layout, the view settings (colours, sizes, edges), saved node lists and formulas, the windows that
open, the tooltip data sources, a demo menu. Without it the app starts with built-in defaults that
know nothing about your columns (size and colour fall back to constant values), so **every dataset
should ship a config.json** - at least a layout and a preset.

### 4.1 How the file is applied

- It is read once, right after `nodes.tsv` / `edges.tsv` are parsed and before the first render.
- It must be valid JSON and start with `"version": 1` and `"exportType": "asdf10k-local-storage"`;
  otherwise it is ignored silently and the app starts with the built-in defaults.
- Every other key is optional; missing keys keep the built-in default, unknown keys are ignored.
- It has the same shape as the file the app writes with lil-gui **settings › Export local
  storage**. The most reliable way to make a good config: load the dataset, arrange the view by hand
  (layout, colour, size, edges, windows), export, save the file as `config.json` in the dataset
  folder, then trim it (remove `localStorage`, keep what you set on purpose).
- What a user changes later is kept in their browser; a fresh browser (or a private window) always
  starts from config.json.
- Values name columns, layouts and node ids of this dataset. A name that does not exist raises no
  error - the setting just does nothing (constant colour, empty window). Take every name from the
  headers and the id column of your TSV files.

### 4.2 Complete key reference

| Key | Type | What it does |
|---|---|---|
| `version` | `1` | **required** |
| `exportType` | `"asdf10k-local-storage"` | **required** |
| `dataset` | string | the dataset key from datasets.json; informational (the folder decides); an old key listed in `aliases` is accepted |
| `nodeLayout` | string | layout at start: `default` (the `x`/`y`/`z` columns), a `<name>` from `x_<name>` columns, or `__CUSTOM__` together with `customLayoutColumns` |
| `customLayoutColumns` | `{ "x": col, "y": col, "z": col }` | three numeric node columns used as positions when `nodeLayout` is `__CUSTOM__` |
| `presets` | `{ "<name>": { preset } }` | named view settings (4.3); merged into the user's presets for this dataset |
| `lastUsedPreset` | string | name of the preset applied at start; must be a key of `presets` |
| `subsetListLibrary` | `[{ "name": string, "namesText": string }]` | named node lists in the Subset List window; `namesText` = node ids separated by spaces. Listed sets also tag their nodes in the column `subsets_a` |
| `subsetBuilderLibrary` | `[{ "name": string, "formula": string, "autorun"?: true }]` | saved formulas in the Subset Query window (`layer_c=metabolite AND degree_n>3`); the first entry with `"autorun": true` is applied at start as the initial selection |
| `openWindows` | `[{ "type", "title"?, "config" }]` | windows opened at start (4.4) |
| `tooltips` | object | extra tooltip data per node type (4.5) |
| `tooltipFetchIdAttribute` | column | node column used for the basic tooltip lookups (usually the gene symbol column, `name`) |
| `window_molecular` | `{ "fetchIdColumn": column }` | column holding the UniProt query for the 3D structure window (gene symbol or UniProt accession) |
| `edgeHighlightSettings` | object | the selection's edges: `highlightEdgesEnabled` (bool), `highlightEdgeWidthScale` (~2-3), `highlightEdgeOpacity` (~1-6), `fadeOtherEdgesEnabled` (bool), `fadeOtherEdgesOpacity` (0-1, how visible other edges stay), `subsetEdgesOnly` (bool: draw only the selection's edges), `edgeSubsetMode` (`induced` = both ends selected, `incident` = at least one) |
| `sliderRanges` | object | min / max / step of the size sliders `nodeSizeScaling`, `nodeMinSize`, `edgeWidthScaling`, `edgeMinWidth`, each `{ "min", "max", "step" }`; narrow them for demos so the graph cannot be made unreadable |
| `presentationMode` | object | reduced menu for demos and exhibitions: `{ "startInPresentationMode": true, "menuItems": [...] }` with item ids such as `windows.distribution`, `windows.enrichment`, `windows.custom`, `layout.next`, `layout.nodeLayout`, `nav.resetView`, `subset.expandOneHop`, `subset.clear`, or `{ "id": "nodes.colorAttribute", "children": ["layer_c", "degree_n"] }` to offer only some options. Leave it out for normal use |
| `ar` | `{ "showBoxLines": bool }` | AR placement box wireframe on the Quest (default `true`) |
| `xrTooltipMaxDistanceMeters`, `xrToggleMaxDistanceMeters` | number (metres) | reach of the VR / AR laser for tooltips and for selecting nodes (about 1) |
| `metadataCache` | `{ "enabled": true }` | tooltip data from a prebuilt `cache/` folder (built with a developer tool); leave it out unless that folder exists |
| `agentBackendUrl` | URL | the AI agent backend's base URL ending in `/api` (e.g. `http://127.0.0.1:8787/api`); leave it out when the deployment proxies `/agent-api/` to the backend. Setup: [agent-backend.md](agent-backend.md) |
| `localStorage` | object | raw browser-storage snapshot written by Export (window positions, table settings). Do not write it by hand; remove it from exported files unless you want exactly those positions |

Top-level `cameraPosition` / `cameraRotation` in exported files are not read; the camera belongs to
a preset (4.3).

### 4.3 Presets: every field, built-in default, range

A preset is a set of view settings. Write the fields you care about; missing ones keep the
built-in default. Several presets can be shipped ("Overview", "Fold change", "Pathways"); users
switch them in lil-gui › Presets. A preset never changes the dataset or the layout (use the
top-level `nodeLayout`).

| Field | Built-in default | Values | Meaning |
|---|---|---|---|
| `nodeColorAttribute` | `original` | `original` (the `color` column / palette) or a node column | node colour |
| `nodeColorScalingMethod` | `linear` | `linear`, `log`, `symlog`, `quantile` | how a numeric colour column maps to the gradient |
| `nodeSizeAttribute` | `size_norm` (constant) | a node column | node size |
| `nodeSizeScalingMethod` | `linear` | as above | |
| `nodeSizeScaling` | 1 | 1-8 | overall node size factor |
| `nodeMinSize` | 0.005 | 0-5 | smallest node after scaling |
| `nodeMeshAttribute` | `cluster` | a category column with few values | node shape per value |
| `nodeMeshScalingMethod` | `linear` | as above | |
| `edgeColorAttribute` | `weight_norm` | an edge column or `weight_norm` | edge colour |
| `edgeColorScalingMethod` | `linear` | as above | |
| `edgeWidthAttribute` | `width_norm` (constant) | an edge column or `width_norm` | edge width |
| `edgeWidthScalingMethod` | `linear` | as above | |
| `edgeWidthScaling` | 2.5 | 0.01-15 | overall edge width factor |
| `edgeMinWidth` | 2 | 0.01-100 | thinnest edge |
| `edgeOpacity` | 0.06 | 0.01-1 | edge transparency |
| `edgeBlending` | `additive` | `normal`, `additive`, `multiply` | how overlapping edges combine; `additive` glows on the dark background, `normal` keeps exact colours |
| `edgeAlphaByWeight` | `true` | bool | edge opacity follows `weight` between `edgeAlphaMin` and `edgeAlphaMax` |
| `edgeAlphaMin` / `edgeAlphaMax` | 0.1 / 0.8 | 0.01-1 | |
| `edgeFadeDistance` | 0.7 | 0.1-1 | edges fade with distance from the camera (1 = no fade) |
| `edgeDensityMode` / `edgeDensityScale` | `false` / 2 | bool / 0.5-5 | thins very dense edge regions |
| `edgeCutoff` | 0 | 0-1 | hides edges whose normalised weight is below it (0 = all edges) |
| `highlightNodesEnabled` | `true` | bool | selected nodes are marked |
| `highlightNodeSizeScale` | 1 | 0-6 | size factor of selected nodes |
| `highlightEdgesEnabled` | `false` | bool | the selection's edges are highlighted |
| `highlightEdgeWidthScale` / `highlightEdgeOpacity` | 0.2 / 1 | numbers | look of highlighted edges |
| `fadeOtherEdgesEnabled` / `fadeOtherEdgesOpacity` | `false` / 0.3 | bool / 0-1 | dim edges outside the selection |
| `subsetEdgesOnly` / `edgeSubsetMode` | `true` / `induced` | bool / `induced`, `incident` | which edges belong to the selection |
| `bloomMode` | `selection` | `always`, `selection`, `off` | glow; `selection` = only selected nodes glow |
| `bloomStrength` / `bloomRadius` / `bloomThreshold` | 0.95 / 0.15 / 0.54 | 0-3 / 0-1 / 0-1 | glow look |
| `enabled` / `distance` | `true` / 1200 | bool / number | culling: nodes farther than `distance` from the camera are not drawn |
| `resolutionScale` | 1 | 0.5-2 | render resolution (lower = faster on weak machines) |
| `enableDynamicResolution` / `targetFPS` | `false` / 60 | bool / number | lowers the resolution automatically to hold the frame rate |
| `cameraPosition` / `cameraRotation` | the app's start view | `{ "x", "y", "z" }` | camera at start; only meaningful when taken from an exported preset |

### 4.4 Windows at start (`openWindows`)

Each entry is `{ "type": ..., "title"?: ..., "config": { ...options, "bounds"?: ..., "xr"?: ... } }`.

- `type` and the options are the same as for the `window.open` command in
  [custom-windows-guide.md](custom-windows-guide.md) (`distribution` with `selectedColumn`,
  `enrichment` with `selectedColumn`, `scatter` with `colX` / `colY`, `custom` with `name`, ...).
  Windows that need a column stay empty without it.
- `bounds` = `{ "left", "top", "width", "height" }` in pixels on the desktop; without it the window
  opens centred at its default size.
- `xr` = `{ "x", "y", "z" }` in metres relative to the head when a VR / AR session starts: `x` to
  the right, `y` up from eye level, `z` forward. A panel to the right: `{ "x": 0.95, "y": -0.05,
  "z": 0.55 }`. Without it panels appear straight ahead.

Open at most two or three windows at start: each costs screen space and, in a headset, frame time.

### 4.5 Tooltips (`tooltips`)

Extra information when hovering a node with Ctrl / Cmd (`extra1`) or Shift (`extra2`), fetched
from public databases per node type:

```json
"tooltips": {
  "typeColumn": "layer_c",
  "types": {
    "protein":    { "extra1": { "fetcher": "uniprot", "idColumns": ["protein_id_c", "name"] },
                    "extra2": { "fetcher": "genecards-expression", "idColumns": ["name"] } },
    "metabolite": { "extra1": { "fetcher": "pubchem", "idColumns": ["metabolite_id_c", "name"] },
                    "extra2": null }
  },
  "default": { "extra1": { "fetcher": "uniprot" }, "extra2": null },
  "showOnly": { "uniprot": ["title", "names", "summary", "facts", "keywords", "features", "go"] },
  "show3dModels": true
}
```

- `typeColumn`: the node column whose value picks the entry in `types` (values must match exactly).
- Fetchers: `uniprot` (function, names, GO; gene symbol or UniProt accession), `genecards-expression`
  (tissue expression image; gene symbol), `pubchem` (metabolite structure, formula, links; KEGG id
  like `C00022` or a name), `none`.
- `idColumns`: columns tried in order; the most precise id first, the name last.
- `default`: for node types not listed in `types`.
- `showOnly.uniprot`: UniProt sections to show; leave it out for all.
- `show3dModels`: molecule / protein 3D models above the tooltip in VR / AR.

These fetch from the internet at hover time; on an offline machine leave `tooltips` out.

### 4.6 Choosing good defaults

Profile the data before writing the config:

```python
import pandas as pd
n = pd.read_csv("nodes.tsv", sep="\t"); e = pd.read_csv("edges.tsv", sep="\t")
print(len(n), "nodes", len(e), "edges", round(len(e) / len(n), 1), "edges per node")
for c in n.columns:
    s = n[c].dropna()
    if c.endswith(("_n", "_norm")):
        print(c, "numeric", f"min {s.min():.3g} max {s.max():.3g} median {s.median():.3g}",
              f"skew {s.skew():.2f}", "has zeros/negatives" if (s <= 0).any() else "")
    elif c.endswith("_c"):
        print(c, "category", s.nunique(), "values:", ", ".join(map(str, s.value_counts().index[:8])))
    elif c.endswith("_a"):
        items = s.astype(str).str.split(",").explode()
        print(c, "list", items.nunique(), "distinct items, coverage", f"{len(s) / len(n):.0%}")
print("layouts:", sorted({c[2:] for c in n.columns if c.startswith("x_")}))
```

Then decide:

- **Layout (`nodeLayout`)**: the one where the structure is easiest to see, usually force-directed
  (`fa2`, `fr`, `force` in the name). `default` only when `x`/`y`/`z` are meaningful.
- **Node colour**: the main biological grouping, a `_c` column with 2-10 values (node type,
  compartment, cluster, regulation). Avoid more than ~15 values. A numeric result (fold change,
  score) as a gradient with the matching scaling method: `linear` for evenly spread values, `log`
  for positive values over orders of magnitude (skew > 2, no zeros), `symlog` for skewed values
  with zeros or negatives (log fold changes, probabilities), `quantile` to spread any distribution.
  `original` only if you wrote meaningful `color` values.
- **Node size**: an importance measure, typically `degree_n` with `quantile` or `log` when a few
  hubs dominate (skew > 2). `nodeSizeScaling` 4-5 and `nodeMinSize` 0.5 for 100-5 000 nodes;
  `nodeSizeScaling` 2-3 above that.
- **Node shape (`nodeMeshAttribute`)**: a category with 2-4 values (protein / transcript /
  metabolite), so shape and colour can show two groupings.
- **Edge colour**: an edge category (`edge_type_c`) if present, else `weight_norm`.
- **Edge opacity by density** (edges per node): below 3 -> `edgeOpacity` 0.5-0.7; 3-10 -> 0.2-0.4;
  above 10 -> 0.05-0.15 plus `edgeCutoff` 0.1-0.3 if `weight` is meaningful. Keep `additive`.
- **Edge width**: `width_norm` (uniform) unless an edge score should stand out (then that column
  with `quantile`); `edgeWidthScaling` 2-3, `edgeMinWidth` 20-40 for small graphs, lower for large.
- **Selection highlight**: `highlightEdgesEnabled: true`, `fadeOtherEdgesEnabled: true` with
  `fadeOtherEdgesOpacity` 0.3-0.6 and `bloomMode: "selection"` make a selected module stand out
  without hiding its context.
- **Node lists (`subsetListLibrary`)**: the groups users will ask about first (published modules,
  differentially expressed sets, pathway members), each with a short name.
- **Formulas (`subsetBuilderLibrary`)**: useful filters (`layer_c=metabolite`, `degree_n>10`,
  `padj_n<0.05 AND log2fc_n>1`); `autorun` only if the app should start with that selection.
- **Windows at start**: none to two; a Distributions window on the main category orients users.
  For a guided story ship a custom window with `open: true` instead.
- **Tooltips**: map the type column's values to fetchers (proteins `uniprot`, metabolites
  `pubchem`), precise id columns first.
- **Large graphs** (> 20 000 nodes or > 100 000 edges): `edgeCutoff` > 0, low `edgeOpacity`,
  `resolutionScale` 0.75 or `enableDynamicResolution: true`, few windows.

Check the result in a fresh private browser window (no stored settings), then adjust and re-export.
Agents that can drive a browser should not stop at these rules: [visual-tuning.md](visual-tuning.md)
describes the loop of changing settings through the app's command API, comparing screenshots and
exporting the verified result as `config.json`.

### 4.7 A complete example

```json
{
  "version": 1,
  "exportType": "asdf10k-local-storage",
  "dataset": "cml",
  "nodeLayout": "fa2_2",
  "lastUsedPreset": "Overview",
  "presets": {
    "Overview": {
      "nodeColorAttribute": "layer_c",
      "nodeSizeAttribute": "degree_n",
      "nodeSizeScalingMethod": "quantile",
      "nodeSizeScaling": 5,
      "nodeMinSize": 0.5,
      "nodeMeshAttribute": "layer_c",
      "edgeColorAttribute": "edge_type_c",
      "edgeWidthAttribute": "width_norm",
      "edgeWidthScaling": 2.5,
      "edgeMinWidth": 30,
      "edgeOpacity": 0.4,
      "edgeBlending": "additive",
      "edgeCutoff": 0,
      "highlightEdgesEnabled": true,
      "fadeOtherEdgesEnabled": true,
      "fadeOtherEdgesOpacity": 0.5,
      "bloomMode": "selection"
    },
    "Fold change": {
      "nodeColorAttribute": "log2fc_n",
      "nodeColorScalingMethod": "symlog",
      "nodeSizeAttribute": "degree_n",
      "nodeSizeScalingMethod": "quantile"
    }
  },
  "subsetListLibrary": [
    { "name": "TCA metabolites", "namesText": "Pyruvate_m Oxaloacetate_m Malate_m Fumarate_m Succinate_m" }
  ],
  "subsetBuilderLibrary": [
    { "name": "Metabolites", "formula": "layer_c=metabolite" },
    { "name": "Hubs", "formula": "degree_n>10" }
  ],
  "openWindows": [
    { "type": "distribution", "config": { "selectedColumn": "layer_c", "useGlobal": true,
      "bounds": { "left": 10, "top": 60, "width": 420, "height": 320 },
      "xr": { "x": 0.95, "y": -0.05, "z": 0.55 } } }
  ],
  "tooltips": {
    "typeColumn": "layer_c",
    "types": {
      "protein": { "extra1": { "fetcher": "uniprot", "idColumns": ["protein_id_c", "name"] },
                   "extra2": { "fetcher": "genecards-expression", "idColumns": ["name"] } },
      "metabolite": { "extra1": { "fetcher": "pubchem", "idColumns": ["metabolite_id_c", "name"] },
                      "extra2": null }
    },
    "show3dModels": true
  },
  "tooltipFetchIdAttribute": "name",
  "window_molecular": { "fetchIdColumn": "name" },
  "sliderRanges": { "nodeSizeScaling": { "min": 2, "max": 8, "step": 0.01 } }
}
```

## 5. Checklist

1. `data/datasets.json` exists, is valid JSON, and lists the dataset with a unique `key` and the
   right `folder`.
2. `nodes.tsv` has `id` as the first column, unique ids, tab separators, a header row.
3. Every column has the right suffix for its kind; list items are comma-separated and contain no
   commas themselves.
4. Layout columns come in complete triples (`x_<name>`, `y_<name>`, `z_<name>`).
5. `edges.tsv` has `source` and `target` with ids that exist in `nodes.tsv`.
6. `config.json` starts with `"version": 1` and `"exportType": "asdf10k-local-storage"`; every
   column, layout, preset name and node id in it exists; `lastUsedPreset` names a shipped preset.
7. In a fresh private browser window the start view shows the intended layout, colours and sizes.
8. Serve `dist/`, open `/?dataset=<key>`: the graph appears; the browser console (F12) lists layouts
   and warns about unknown ids or keys.
