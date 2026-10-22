# Writing custom windows for asdf10k

A guide for people and AI agents who prepare **custom windows** for an asdf10k deployment. It is
self-contained: you do not need the asdf10k source code. Give this file to the agent that writes
the windows.

## What asdf10k is

asdf10k is a 3D graph explorer for biological networks (proteins, transcripts, metabolites and
their interactions). It loads one **dataset** - a node table (`nodes.tsv`), an edge table
(`edges.tsv`) and a `config.json` - and shows it as a 3D graph in the browser and in VR / AR
headsets (Quest 3). Users select **subsets** of nodes, colour and size nodes by columns, switch
between precomputed **layouts**, and open analysis **windows** (distributions, enrichment, scatter,
tables, network views, random walk, clustering).

A **custom window** is a markdown file shipped with the dataset. It opens as a floating window in
the app (and as a panel in VR / AR). Its text, tables and images are shown as written; its links
and blocks become **buttons that act on the app**: switch the layout, colour the graph, select
nodes, open an analysis window with the right settings, run a random walk. Use them for guided
tours, curated findings, demo scripts and "views" of the data.

## Files

```
data/<dataset>/custom_windows/
  index.json                 # the list of windows (required - the app cannot list folders)
  tour/window.md             # one window per folder ...
  tour/plots/degree.png      # ... with its images next to it
  overview.md                # ... or a single file directly in custom_windows/
```

`index.json` - an array; each entry is a folder name (the file is `<folder>/window.md`), a file
name ending in `.md`, or an object `{ "id": "...", "file": "..." }`:

```json
["tour", "overview.md", { "id": "cr1", "file": "findings/cr1.md" }]
```

The **id** of a window is the folder name, the file name without `.md`, or the given `id`. Keep ids
short, lowercase, with dashes. The order in the menu follows `order` in the front matter, then the
index order.

The windows are loaded when the dataset loads. After changing files, reload the page.

## Front matter

Optional, at the very top of the markdown file, one `key: value` per line between `---` lines (a
simple format - no nested YAML):

```markdown
---
title: Guided tour
icon: 🧭
width: 560
height: 620
open: true
order: 1
---
```

| Key | Meaning | Default |
|---|---|---|
| `title` | window title and menu label | the id |
| `icon` | one emoji in the title bar | 🗒 |
| `width`, `height` | initial size in pixels | 520 × 560 |
| `open` | `true` = open automatically when the dataset loads | `false` |
| `order` | position in the menu (smaller first) | index order |

## Markdown

Standard markdown (GitHub flavour): headings, paragraphs, lists, **tables**, code, block quotes,
links, images. Images and links with relative paths resolve against the markdown file's folder
(`![degree](plots/degree.png)`). Mermaid diagrams render from a fenced block with the language
`mermaid`. HTML is sanitised; scripts and styles are removed. The window is narrow (about 520 px
at 18 px text) and is read in VR / AR as well: short paragraphs, small tables, one idea per
section.

## Buttons

There are three kinds of interactive elements. All of them run **app commands** (listed below).

### 1. Command links

A markdown link whose target starts with `cmd:` becomes a button:

```markdown
[Next layout](cmd:layout.next)
[ForceAtlas2 layout](cmd:settings.set?id=layout.nodeLayout&value=fa2_2)
[Open Distributions of degree](cmd:window.open?type=distribution&selectedColumn=degree_n&useGlobal=false)
```

Syntax: `cmd:<command>?<param>=<value>&<param>=<value>`. Values are URL-encoded strings; lists are
comma-separated (`ids=A,B,C`); numbers and `true` / `false` are converted. Buttons are **blue**
until clicked and **green** once done.

View changes (`settings.set`, `window.open`, `window.configure`, `window.close`) **toggle**: a
second click on a green button undoes exactly what the first did (restores the previous setting,
closes the opened window).

Links to `subset.set`, `subset.add` or `subset.saveToLibrary` become **node chips** instead: the
label with the node count; click = make these nodes the selection, **+** = add them to the
selection, **📖** = save them to the subset library (under `name=` or a name derived from the
label). A chip for a single node highlights that node. A chip for an empty list clears the
selection.

```markdown
[Top 8 bridges](cmd:subset.set?ids=ACOT2_p,CFHR1_p,C9_p,CCNB1_t,MDH2_p,PC_p,PDCD2_p,TMPRSS11E_p&name=top-8-bridges)
```

### 2. Cards (fenced blocks with the language `asdf10k`)

A JSON object in a fenced block with the language `asdf10k` becomes a card:

**Settings card** - several view settings at once, one Accept button (then Revert):

````markdown
```asdf10k
{"type":"settings","label":"Colour by layer, size by degree","changes":[
  {"id":"nodes.colorAttribute","value":"layer_c"},
  {"id":"nodes.sizeAttribute","value":"degree_n"}
]}
```
````

**Window card** - opens a window with settings (or changes an open one with `"id"`):

````markdown
```asdf10k
{"type":"window","label":"Pathway enrichment of the selection","window":"enrichment","config":{"selectedColumn":"pathways_a"}}
```
````

**Subset card** - a named node set with Set / + / Library:

````markdown
```asdf10k
{"type":"subset","name":"TCA metabolites","description":"the cycle's intermediates","ids":["Pyruvate_m","Oxaloacetate_m","Malate_m","Fumarate_m","Succinate_m"]}
```
````

**Command card** - any command with one button:

````markdown
```asdf10k
{"type":"command","label":"Random walk from the selection","command":"rwr.run","params":{"name":"sel","topN":20}}
```
````

### 3. Plain links

Links with `http(s)://` open in a new browser tab.

## Node ids and columns

Node ids are the values of the first column (`id`) of the dataset's `nodes.tsv` - for example
`CR1_p` (protein), `CR1_t` (transcript), `Pyruvate_m` (metabolite). Ids that are not in the loaded
graph are skipped (a chip shows them struck through).

Columns are the other headers of `nodes.tsv`. The suffix gives the kind, and the kind decides
where a column can be used:

| Suffix | Kind | Example | Usable for |
|---|---|---|---|
| `_n` | number | `degree_n` | size, colour (gradient), Distributions, Scatter |
| `_c` | category | `layer_c` | colour (one colour per value), Distributions, Enrichment |
| `_a` | list of values | `pathways_a` | colour, Distributions, UpSet, Enrichment |
| `_kv`, `_c_kv` | key:value pairs | `expr_kv` | Distributions, KV table |
| `_norm` | number 0..1 | `score_norm` | like `_n` |

Layouts are columns triples `x_<name>`, `y_<name>`, `z_<name>`; the layout name is `<name>`
(e.g. `fa2_2` from `x_fa2_2`). `default` is the dataset's base positions.

Ask the dataset owner for the header line of `nodes.tsv` (and `edges.tsv`), or read them yourself,
before writing buttons: a wrong column or layout name makes the button fail with a message.

## Commands

### View settings: `settings.set`

`cmd:settings.set?id=<setting>&value=<value>` or a settings card.

| Setting id | Values |
|---|---|
| `nodes.colorAttribute` | `original` or any node column |
| `nodes.colorMethod` | `linear`, `log`, `symlog`, `quantile` (`symlog` / `quantile` for skewed values) |
| `nodes.sizeAttribute` | any node column |
| `nodes.sizeMethod` | `linear`, `log`, `symlog`, `quantile` |
| `nodes.sizeScaling` | number 1 .. 8 |
| `nodes.minSize` | number 0 .. 5 |
| `edges.colorAttribute`, `edges.widthAttribute` | an edge column (e.g. `edge_type_c`, or an RWR flow column after a random walk) |
| `edges.colorMethod`, `edges.widthMethod` | `linear`, `log`, `symlog`, `quantile` |
| `edges.widthScaling` | number 0.01 .. 15 |
| `edges.cutoff` | number 0 .. 1 (hide edges with a lower normalised weight) |
| `edges.opacity` | number 0.01 .. 1 |
| `layout.nodeLayout` | a layout name (`default`, `fa2_2`, ...) |
| `nav.mode` | `Trackball`, `Orbit`, `Map` |

The **highlight** settings (`highlight.*`: how the selection is marked, fading the rest) are the
user's choice and cannot be changed by buttons.

### Actions (no parameters)

| Command | Does |
|---|---|
| `layout.next`, `layout.prev` | next / previous layout |
| `nav.flyToSubset` | camera to the selection |
| `nav.resetView` | camera to the start view |
| `subset.expandOneHop` | add all neighbours of the selection |
| `subset.connect` | add connector nodes so the selection becomes one connected subgraph |
| `subset.commonNeighbors` | add the nodes connected to every selected node |
| `subset.pruneLeaves` | remove selected nodes with at most one link inside the selection |
| `subset.isolate` | toggle: hide everything outside the selection |
| `subset.subsetLayout` | toggle: 3D layout of the selection only |
| `subset.clear` | clear the selection |

### Selection and library

| Command | Parameters | Does |
|---|---|---|
| `subset.set` | `ids` (list; empty = clear) | make these nodes the selection |
| `subset.add` | `ids` | add them to the selection |
| `subset.saveToLibrary` | `name`, `ids` | save as a named subset in the library |

### Windows

| Command | Parameters | Does |
|---|---|---|
| `window.open` | `type`, then the window's options | open an analysis window |
| `window.configure` | `type` (the newest window of that type) or `id`, then options | change an open window (opens one when none is open) |
| `window.close` | `id` | close a window |

Window types and their options (options marked **required** must be given):

| `type` | Shows | Options |
|---|---|---|
| `distribution` | histogram / bars of one column | **`selectedColumn`**, `useGlobal` (true = all nodes, false = the selection), `rot90`, `frozen` |
| `enrichment` | enrichment of a category / list column in the selection vs the whole graph | **`selectedColumn`**, `viewMode` (`table` / `chart`), `frozen` |
| `scatter` | two numeric columns | **`colX`**, **`colY`**, `scaleX` / `scaleY` (`linear` / `logp`), `showRegressionLine`, `useGlobal` |
| `heatmap` | co-occurrence of two columns | **`col1`**, **`col2`**, `useLog1`, `useLog2`, `useGlobal` |
| `upset` | combinations of a list column | **`selectedAttribute`**, `numericAttribute`, `useGlobal` |
| `subset-table` | the selected nodes as a table | `selectedAttributes` (comma list), `sortKey`, `sortDir` (`asc` / `desc`) |
| `edge-table` | the edges inside the selection | `selectedAttributes`, `sortKey`, `sortDir` |
| `lcc-analysis` | connected components and k-core | `useGlobal`, `kCoreMode`, `kCoreN` |
| `subset-network` | 2D network of the selection | - |
| `network-meta` | network aggregated by a category column | **`column`**, `useGlobal` |
| `aggregated-network` | nodes grouped by a column value | **`column`**, `useGlobal` |
| `subset-builder` | subset by formula | `formula` (e.g. `layer_c=metabolite AND degree_n>3`) |
| `subset-list` | node lists and the subset library | `namesText` |
| `rwr`, `clustering` | the random walk / clustering windows | see the commands below |
| `dataset-info` | dataset summary | - |
| `custom` | another custom window | **`name`** (its id) |

Most analysis windows have a G / S toggle: `useGlobal=true` = the whole graph, `useGlobal=false` =
the current selection.

### Computations

| Command | Parameters | Does |
|---|---|---|
| `rwr.run` | `seeds` (ids; default the selection), `name`, `alpha` (0.7), `beta` (0.3), `topN` | random walk with restart: adds node columns `rwr_<name>_rank_n`, `rwr_<name>_probability_n` and the edge column `rwr_<name>_flow_n` |
| `cluster.run` | `layout` (`default`), `method` (`louvain` / `leiden-simple`), `k` (15), `resolution` (1), `minClusterSize` (5), `columnName` | clustering on a layout's positions; adds a category column `cluster_<n>_c` |

### Other commands

| Command | Parameters | Does |
|---|---|---|
| `dataset.switch` | `key` (a dataset key from `data/index.json`) | load another dataset (closes every window) |
| `columns.addFromTsv` | `tsv` (first column `_id`, then suffixed columns), `source`, `descriptions` | add temporary node columns |
| `xr.molecule.open` | `node` (id or gene name) | open the protein's 3D structure in the AR molecule mode, for everyone in the session who is in AR (a desktop shows nothing in 3D) |
| `xr.molecule.select` | `residue` (number; `null` clears) | select a residue of the open AR molecule |
| `xr.molecule.filter` | `row` (`consequence` / `type`), `key` (the chip as the list shows it), `on` | switch a residue-list filter chip |
| `xr.molecule.close` | - | close the AR molecule for everyone |

`settings.list` and `config.export` return data and are meant for scripts (`window.asdf10k`), not
buttons.

A typical sequence for a tour: select seeds, run the walk, colour by its probability and the edges
by its flow:

````markdown
[Seeds: the TCA metabolites](cmd:subset.set?ids=Pyruvate_m,Oxaloacetate_m,Malate_m,Fumarate_m)

```asdf10k
{"type":"command","label":"Random walk from the seeds","command":"rwr.run","params":{"name":"tca"}}
```

```asdf10k
{"type":"settings","label":"Show the walk","changes":[
  {"id":"nodes.colorAttribute","value":"rwr_tca_probability_n"},
  {"id":"nodes.colorMethod","value":"symlog"},
  {"id":"edges.widthAttribute","value":"rwr_tca_flow_n"},
  {"id":"edges.widthMethod","value":"quantile"}
]}
```
````

## A complete example

`data/<dataset>/custom_windows/index.json`:

```json
["tour"]
```

`data/<dataset>/custom_windows/tour/window.md`:

````markdown
---
title: Guided tour
icon: 🧭
open: true
---
## Layouts

[ForceAtlas2](cmd:settings.set?id=layout.nodeLayout&value=fa2_2) · [Spectral](cmd:settings.set?id=layout.nodeLayout&value=fa2spectral_1) · [Next layout](cmd:layout.next)

## Colour

```asdf10k
{"type":"settings","label":"Colour by layer, size by degree","changes":[{"id":"nodes.colorAttribute","value":"layer_c"},{"id":"nodes.sizeAttribute","value":"degree_n"}]}
```

## The finding

The TCA metabolites connect to complement only through one protein chain.

[TCA metabolites](cmd:subset.set?ids=Pyruvate_m,Oxaloacetate_m,Malate_m,Fumarate_m,Succinate_m&name=tca-metabolites) · [Expand by one hop](cmd:subset.expandOneHop) · [Fly there](cmd:nav.flyToSubset)

[Pathway enrichment of the selection](cmd:window.open?type=enrichment&selectedColumn=pathways_a)

![Degree of the module](plots/degree.png)
````

## Checklist for writers

1. `index.json` lists every window; every listed file exists.
2. Node ids, column names and layout names are taken from the dataset's `nodes.tsv` header and id
   column - not guessed.
3. Every window that needs a column gets it (`selectedColumn`, `colX` / `colY`, `col1` / `col2`,
   `selectedAttribute`, `column`).
4. Images are next to the markdown and referenced relatively.
5. Text is short: the window is narrow and is also read in a headset.
6. Test: load the dataset, open "+" › Custom › your window, click every button once.
