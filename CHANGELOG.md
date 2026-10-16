## 0.7.0 (2026-10-16)
## 0.6.0 (2026-10-05)
## 0.5.2 (2026-10-04)

### Bug Fixes

* fade other edges also for a subset without edges of its own (then all edges fade)
## 0.5.1 (2026-10-02)

### Features

* fog distance default 1000, slider range 5-4000
* **xr:** laser pick range configurable as xrHoverMaxDistanceMeters in config.json, default 1 m
* **xr:** resize window panels with the laser from the bottom-right corner; charts announce redraws instead of 30-frame panel polling
* **xr:** separate laser ranges for tooltips (1 m) and trigger toggle (2 m) in config.json
* **xr:** thumbstick scrolls the window under the laser; poll ResizeObservers during XR so charts relayout after a resize

### Bug Fixes

* **xr:** re-raster the panel after a thumbstick scroll (no scroll events while presenting)
## 0.5.0 (2026-10-02)

### Features

* hover tooltip
* tooltip fixes, lilgui in window launcher
* vr culling
* **xr:** WebGPU + WebXR prototype for Quest 3

### Bug Fixes

* dropdown feature for htmlmesh

### Performance Improvements

* frame profiler, benchmark harness, and first render optimisations
* InstancedMesh for nodes and edges, direct render when bloom is off, benchmark report
* isolate each enrichment window's worker so they stop cancelling each other
* load TensorFlow.js and pacmap_tfjs on demand
* run enrichment stats (hypergeometric p-value + FDR) in a Web Worker
* run the subset declutter force layout (s key) in a Web Worker
* static instance buffers, XR panel supersampling, GPU-time runs, reports

### Reverts

* Revert "xr: keep the tooltip panel clear of its node"
## 0.4.0 (2026-09-26)

### Features

* add "Add common neighbors" and "Prune leaf nodes" calc menu items
* add "Connect subset" calc menu item (Steiner-tree shortest-path connect)
* add "Expand ..." calc menu item to expand subset by edge attribute
* add "i" isolate-mode shortcut, Escape exits it first
* add Edge Table window, generalizing the subset table into EntityTable
* camera-following key light for consistent node facet contrast
* exit subset-layout mode on node layout switch
* prefer name attribute as tooltip title, id smaller in brackets
* remove r/m report-modal shortcuts, reorder help dialog
* search + icon bar improvements, subset-layout recalc on change
* show notification with nodes/edges added after edge-attribute expand
* show source/target node tooltips beside the edge tooltip

### Bug Fixes

* close hover dead-zone between icon-bar buttons and their dropdowns
* **dataset:** trim edges.tsv header and warn on column-count mismatch
* gate edge source/target tooltips behind Shift, fix overlap on clamp
* keep top-left icon bar dropdowns from pushing sibling buttons
* resolve all eslint errors and warnings across src
## 0.3.0 (2026-09-25)

### Features

* add enrichment window for categorical/array column analysis
* add L/Shift+L shortcut to cycle node layout, fix focus & duplicate default layout
* add subset-only 3D force layout mode (s key), fix default-layout dropdown gap
* **aggregatednetwork:** min degree/edge width slider
* **aggregatednetwork:** two more options to calculate edge count
* cluster
* enlarge normalized graph scale to 300, exclude layout columns from attribute dropdowns
* export full nodes.tsv
* **layoutcalc:** feature
* **rwr:** better implementation
* upload

### Bug Fixes

* no binning dist chart for categorical, added freeze button
* remove click-to-open-changelog from version label
* rescale explosion/relayout constants for the 300-unit normalized graph
## 0.2.4 (2026-03-13)

### Features

* aggregated network
* create layout
* spectral embeddings for large graphs

### Bug Fixes

* color palette reverse option, subset key instead keyvalue as default for kv columns
* **presets:** only load and assign to proper dataset
## 0.2.3 (2026-03-09)

### Features

* create layout
* spectral embeddings for large graphs
## 0.2.2 (2026-03-07)

### Features

* 3d popup
* 3d viewer, sidebar list labels molecule elements
* 3rd ctrl tooltip
* add all kinds of force layout parameters to meta multi network
* add UpSet window with categorical/array/KV attribute, dark theme, G/S and freeze
* add whole cluster
* allow ?dataset=asdf or /dataset uri
* alt qwe with different movement scales
* animation
* barchart improvements
* **barchart:** sort stacked bar charts by subvalue/name
* better table with tooltip
* binning on off toglgle in distribution chart
* bloom highlighted, fade others
* calcs, expand subset
* clickable nodes in table
* colors for table categoriesd _a _kv etc
* ctrl 3rd tooltip
* delete browserstorage
* dist table for subset cols
* doom rwr
* duplicate windows, subset query library
* **edgehilight:** smarter and more control on how to highlight in settings window
* **edgesubset:** highlighting edge subsets, configurable in settings window
* ensure windows are inside browser windw when creating from config.json
* esc to clear subset
* excel copy paste
* explosion
* explosion + halfexplosion + reset fix with alt xyr
* explosion forced subset
* extract keys from _c_kv and create extra categorival items in cat dropdowns like color etc
* focus mode
* fog
* global color per column refined
* has/substr feature for querly language
* heatmap
* heatmap cut to top 50 elements if more
* heatmap diagonalbar grey
* heatmap num items limit
* helper util to delete unwanted layouts
* highligh nodes toggle, usegeneid if exists for molecular viewer
* highligh on hover in 3dmol viewer
* highlights from column for 3d viewer
* inlineview for table
* keyvalue categorical creates stacked bars in global distribution chart
* kv
* kv split toggle for distributions
* lasso, interact modes, uibar
* layouts
* lcc options, by k core, cc
* library query, drag drop nodes to 3d explorere
* llm stuff markdown, table dist changes for binning
* load/save settings
* loading bar
* lol hardcoded terms
* median,  max degree for lcc
* multi meta network
* multiexplosion
* multiple meshes and mesh select by attributer
* network dist details
* network meta window
* new edge material
* new global distribution chart that aggregates a and uses same logic as subset distribution
* new network window
* nodeset dragdrop support for heatmap (src) and subsetlist (target)
* offset on duplicate
* preset json
* pulse active node
* query engine
* **query:** autorun option for config
* rectangular selection for scatter chart and drag drop source ability
* relayout
* relayout increment factor
* rwr progress bar improvements, give ui thread time to redraw
* **rwr:** add top dataset
* **rwr:** multi run by categorical
* **rwr:** progress bar refinement
* scatter size aggegrate, node attribute integrated into pubsub bus
* scatter window
* secondary tooltip
* side panel
* side panel details
* side panel details
* simplify to common material that supports opacity + glow
* small stuff i think
* **socialnotebook:** categorical parsing for edge attributes
* store/layout in config
* styling
* subset highlighting
* subset list, drop targets more fields
* subset network changes, upload script multiple datasets, revert color palette
* subset panel
* subset panel
* subset query allow unicode chars
* **subsetbuilder:** ctrl + enter to run query
* **subsetquery:** added library of subsets
* table 500 limit, subset list header row count
* **table:** allow as drag drop target, freeze when received drop
* **table:** sticky header, sticky content on high rows
* tags_a column that sync with subset library and can be acces everywhere, emit pubsub event on dataset metadata change
* temporary tsv values
* tooltip for geneid column if exists (override potential wroing id in lasbel/mainid)
* tooltip switching
* **ui:** collapse window to bottom edge if snapped there already
* **ui:** hide legacy windows and update titles
* **ui:** windows snap to each other and edges
* upload script
* **upset:** dragdrop
* **upset:** parsing for kv improved
* user modes, interact select
* webgpu bloom
* webgpu working, indicator emoji, forcewebgl uri support
* window icons

### Bug Fixes

* 3rd tooltip refinement
* annotation node opacity
* arrow keys removed
* autoload preset constrained to current dataset
* **cicd:** errors in dev env
* **cicd:** vite config for coep headers etc
* clear subset, close windows when switching dataset
* create windows after node data is built
* **datasetloader:** strip newline of last tsv header
* default values lilgui
* depth stuff
* depth write for highlighted nodes
* **distributionswdw:** drag drop for non stacked
* **distributionwindow:** hover tooltip out of window when at top edgeg, rwr warn if overwriting old results
* **docs:** refine wording
* dont show coordinate columns in subset table
* edge color gets recalculated and gets darker and darker
* explosion + highlighted
* fog settings
* freehand select reduce z-index to go behind lilgui
* get rid of data in preset
* heatmap close bug, observer; log default of for checkbox
* highlight edges
* lasso ui bar fixes
* limit presets to dataset when populating preset dropdown
* lint errs
* **multimetanetwork:** fixed some, introduced new bugs probably, removed 4x save img temporarily
* no grey in catagorical colors
* no subset changes in search enter
* node selection bugfix (index over multiple meshes)
* normalization order, reduced multiple normalizations
* proper clone windows
* race condition normalization mesh rebuild, hacky ensureNormalizationsBeforeRebuild() added
* reapply highlighting when mesh rebuilt by changing attribute dropdowns
* refine preset loading, presets per layout, get rid of presets.json and use config.json
* relative paths for prod builds
* rwr speedup
* selection hilight management
* settings button in ui also open settings wdw when closed with x
* side panel dfixes
* small stuff
* stuff
* **subsetlibrary:** on delete also delete from subset temp column and emit column data changed event; handle column data changed in upset window
* **subsetlistwindow:** handle resizig window and splitter better
* switched vite to mpa, so 404 dont load default app and trigger multiple function calls
* temporarily removing show labels
* texture memory leak
* tooltip ctrl cleanup
* tooltip refinements
* **ui-bar:** move easteregg away
* **upset:** pre check len and clip attributes
* **windows:** click brings to top
* zlayering

### Performance Improvements

* configurable depth sort, selective bloom, and sort removal
* reduced to 3 meshes
## 0.2.1 (2026-03-06)

### Features

* 3d popup 901111c
* 3d viewer, sidebar list labels molecule elements 0db1233
* 3rd ctrl tooltip b7be899
* add all kinds of force layout parameters to meta multi network 48d5f25
* add UpSet window with categorical/array/KV attribute, dark theme, G/S and freeze 8b8070b
* add whole cluster fb5d296
* allow ?dataset=asdf or /dataset uri e5511a9
* alt qwe with different movement scales cc8b76b
* animation bebe559
* barchart improvements c6d2704
* **barchart:** sort stacked bar charts by subvalue/name 893e78e
* better table with tooltip fb1d2be
* binning on off toglgle in distribution chart 5de03f7
* bloom highlighted, fade others 518483e
* calcs, expand subset 0cc0d46
* clickable nodes in table 7898777
* colors for table categoriesd _a _kv etc 512aaf3
* ctrl 3rd tooltip 32726ef
* delete browserstorage 6e4192a
* dist table for subset cols 7fc6829
* doom rwr a460b78
* duplicate windows, subset query library 237b9c8
* edge node color attr d5aa3be
* ensure windows are inside browser windw when creating from config.json ea3244d
* esc to clear subset cb3b226
* excel copy paste 3f65cbd
* explosion c7d268f
* explosion + halfexplosion + reset fix with alt xyr bd398dc
* explosion forced subset 33c12bd
* extract keys from _c_kv and create extra categorival items in cat dropdowns like color etc 8099e19
* focus mode e069807
* fog 1d4cabb
* global color per column refined cce664f
* has/substr feature for querly language daf3ed5
* heatmap fe817a6
* heatmap cut to top 50 elements if more ec83642
* heatmap diagonalbar grey 5ed9a9b
* heatmap num items limit 3714b3a
* helper util to delete unwanted layouts fed2940
* highligh nodes toggle, usegeneid if exists for molecular viewer cec1f9f
* highligh on hover in 3dmol viewer 6765df7
* highlights from column for 3d viewer f06ecce
* inlineview for table 76c7e80
* keyvalue categorical creates stacked bars in global distribution chart d437973
* kv e052bdb
* kv split toggle for distributions c74f5d7
* lasso, interact modes, uibar 20eb9ca
* layouts a1cfec8
* lcc options, by k core, cc e82c85b
* library query, drag drop nodes to 3d explorere bacfddc
* llm stuff markdown, table dist changes for binning 5a46655
* load/save settings 5b22281
* loading bar cd7b38d
* lol hardcoded terms eef1b8d
* median,  max degree for lcc 84cfce0
* multi meta network 450082f
* multiexplosion f2da575
* multiple meshes and mesh select by attributer 9c0ba2f
* network dist details ef6117e
* network meta window 1634537
* new global distribution chart that aggregates a and uses same logic as subset distribution 67caddd
* new network window 4802963
* nodeset dragdrop support for heatmap (src) and subsetlist (target) 9f55c3f
* offset on duplicate 6d1b236
* preset json b44982d
* pulse active node cb4de04
* query engine d592d70
* **query:** autorun option for config 9051834
* rectangular selection for scatter chart and drag drop source ability 7373c88
* relayout 1c32a51
* relayout increment factor 256f802
* rwr progress bar improvements, give ui thread time to redraw ad062f8
* **rwr:** add top dataset 8ffc815
* **rwr:** multi run by categorical fba0cea
* **rwr:** progress bar refinement ba42418
* scatter size aggegrate, node attribute integrated into pubsub bus efd79b8
* scatter window 1d8c92a
* secondary tooltip e73a3e1
* select edge attr for width 54a9d5d
* side panel aceae6d
* side panel details 9b0dd08
* side panel details 7ef32a5
* simplify to common material that supports opacity + glow f2f7065
* small stuff i think aed53ae
* **socialnotebook:** categorical parsing for edge attributes 07ab196
* store/layout in config 2619505
* styling 7246320
* subset highlighting 193b8e5
* subset list, drop targets more fields 87e3c33
* subset network changes, upload script multiple datasets, revert color palette c9df868
* subset panel d4ce2f8
* subset panel fb7765b
* subset query allow unicode chars 576bf4e
* **subsetbuilder:** ctrl + enter to run query d30168d
* **subsetquery:** added library of subsets 94652b3
* table 500 limit, subset list header row count 6f7a652
* **table:** allow as drag drop target, freeze when received drop 14b9a74
* **table:** sticky header, sticky content on high rows c27368b
* tags_a column that sync with subset library and can be acces everywhere, emit pubsub event on dataset metadata change 3c548cc
* temporary tsv values ba678f3
* tooltip for geneid column if exists (override potential wroing id in lasbel/mainid) 5302863
* tooltip switching a3c15a7
* **ui:** collapse window to bottom edge if snapped there already cad4270
* **ui:** hide legacy windows and update titles 5b4e8ae
* **ui:** windows snap to each other and edges 263cfd1
* upload script 503d8f0
* **upset:** dragdrop d5db99a
* **upset:** parsing for kv improved 2c676fd
* user modes, interact select b1fa64f
* webgpu bloom b4599d5
* webgpu working, indicator emoji, forcewebgl uri support 1780b91
* window icons 62fab92

### Bug Fixes

* 3rd tooltip refinement 88b21fc
* annotation node opacity cd92142
* arrow keys removed 5683e34
* autoload preset constrained to current dataset ed77750
* **cicd:** errors in dev env c6d57b1
* **cicd:** vite config for coep headers etc 644b589
* clear subset, close windows when switching dataset c7bb49d
* create windows after node data is built 098f3a7
* **datasetloader:** strip newline of last tsv header 0837b47
* default values lilgui 5a7f7b7
* depth stuff b636064
* depth write for highlighted nodes 91902bb
* **distributionswdw:** drag drop for non stacked 79d1c03
* **distributionwindow:** hover tooltip out of window when at top edgeg, rwr warn if overwriting old results b1c9fb3
* **docs:** refine wording d4fc560
* dont show coordinate columns in subset table 711a7cc
* edge color gets recalculated and gets darker and darker e3fd0b2
* explosion + highlighted 169253a
* fog settings 0994900
* freehand select reduce z-index to go behind lilgui 2430020
* get rid of data in preset 961df3e
* heatmap close bug, observer; log default of for checkbox 5af450a
* highlight edges d7ac59c
* iwas da3afdb
* lasso ui bar fixes 6b1cd84
* limit presets to dataset when populating preset dropdown f78f3b3
* lint errs 7a6e6d9
* **multimetanetwork:** fixed some, introduced new bugs probably, removed 4x save img temporarily 3f5f0f4
* no grey in catagorical colors 405ba1f
* no subset changes in search enter 4ae2532
* node selection bugfix (index over multiple meshes) 4be49d7
* normalization order, reduced multiple normalizations 5b5adc5
* proper clone windows b963645
* race condition normalization mesh rebuild, hacky ensureNormalizationsBeforeRebuild() added 9f4d49c
* reapply highlighting when mesh rebuilt by changing attribute dropdowns e75202a
* refine preset loading, presets per layout, get rid of presets.json and use config.json 6e193b7
* relative paths for prod builds 48879d7
* rwr speedup 1904def
* selection hilight management 5144c52
* settings button in ui also open settings wdw when closed with x f21dfac
* side panel dfixes e39daba
* small stuff fc1315d
* stuff 90fef90
* **subsetlibrary:** on delete also delete from subset temp column and emit column data changed event; handle column data changed in upset window f0af55d
* **subsetlistwindow:** handle resizig window and splitter better 4b94c16
* switched vite to mpa, so 404 dont load default app and trigger multiple function calls 874bf15
* temporarily removing show labels 68f8b76
* texture memory leak 46eb5de
* tooltip ctrl cleanup 4e0d948
* tooltip refinements 777340b
* tooltips ca2ad2a
* **ui-bar:** move easteregg away 848c4bd
* **upset:** pre check len and clip attributes a9eeb4a
* **windows:** click brings to top 36998c2
* zlayering caa1040

### Performance Improvements

* configurable depth sort, selective bloom, and sort removal c8a38ca
* reduced to 3 meshes 3956a78
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-03-06

### Added

* Initial changelog; version and release setup (release-it, conventional-changelog).

## Git history (by date)

## 2026-03-06

- `14b9a74` feat(table): allow as drag drop target, freeze when received drop
- `fba0cea` feat(rwr): multi run by categorical
- `2c676fd` feat(upset): parsing for kv improved
- `8ffc815` feat(rwr): add top dataset
- `60e863f` chore(data): bulk add array elements to column
- `e4c8bcf` chore(rwr): add kv column
- `a576727` ui(subsetlist): better logic for handling frozen state
- `b1c9fb3` fix(distributionwindow): hover tooltip out of window when at top edgeg, rwr warn if overwriting old results
- `f0af55d` fix(subsetlibrary): on delete also delete from subset temp column and emit column data changed event; handle column data changed in upset window
- `28d0495` chore(rwr): emit dataset metadata change when adding temporary columns
- `3d5258e` ui(query/list) splitter resizing bit more sane, min width, icons, pubsub for library changes
- `22c260a` chore(temporarycolumns): changed column name from tags_a to subsets_a
- `4b94c16` fix(subsetlistwindow): handle resizig window and splitter better
- `3c548cc` feat: tags_a column that sync with subset library and can be acces everywhere, emit pubsub event on dataset metadata change
- `5d013be` ui(subsetlist): splitter, css refine
- `94652b3` feat(subsetquery): added library of subsets
- `5b4e8ae` feat(ui): hide legacy windows and update titles
- `79d1c03` fix(distributionswdw): drag drop for non stacked
- `6f7a652` feat: table 500 limit, subset list header row count
- `36998c2` fix(windows): click brings to top
- `d5db99a` feat(upset): dragdrop
- `a9eeb4a` fix(upset): pre check len and clip attributes
- `21de8fe` chore(upset): improve ui etc

## 2026-03-05

- `8b8070b` feat: add UpSet window with categorical/array/KV attribute, dark theme, G/S and freeze
- `e82c85b` feat: lcc options, by k core, cc
- `848c4bd` fix(ui-bar): move easteregg away
- `644b589` fix(cicd): vite config for coep headers etc
- `ad062f8` feat: rwr progress bar improvements, give ui thread time to redraw

## 2026-03-04

- `ba42418` feat(rwr): progress bar refinement
- `1904def` fix: rwr speedup
- `a460b78` feat: doom rwr
- `84cfce0` feat: median,  max degree for lcc
- `5af450a` fix: heatmap close bug, observer; log default of for checkbox
- `e81e4cf` chore: streamline subset global toggle to header bar, get rid of old windows
- `6d1b236` feat: offset on duplicate

## 2026-03-03

- `893e78e` feat(barchart): sort stacked bar charts by subvalue/name
- `d437973` feat: keyvalue categorical creates stacked bars in global distribution chart
- `5302863` feat: tooltip for geneid column if exists (override potential wroing id in lasbel/mainid)
- `0837b47` fix(datasetloader): strip newline of last tsv header
- `d30168d` feat(subsetbuilder): ctrl + enter to run query
- `a80e877` chore: strings refined
- `9051834` feat(query): autorun option for config
- `b4a0041` fox(heatmap): show original binning bounds, not log value, when log on
- `711a7cc` fix: dont show coordinate columns in subset table
- `cd92142` fix: annotation node opacity
- `3f5f0f4` fix(multimetanetwork): fixed some, introduced new bugs probably, removed 4x save img temporarily
- `efd79b8` feat: scatter size aggegrate, node attribute integrated into pubsub bus
- `7373c88` feat: rectangular selection for scatter chart and drag drop source ability
- `d4fc560` fix(docs): refine wording
- `cd7b38d` feat: loading bar
- `87e3c33` feat: subset list, drop targets more fields
- `9f55c3f` feat: nodeset dragdrop support for heatmap (src) and subsetlist (target)
- `48d5f25` feat: add all kinds of force layout parameters to meta multi network

## 2026-03-02

- `450082f` feat: multi meta network
- `1d8c92a` feat: scatter window
- `2955993` settings: add other dataset
- `1634537` feat: network meta window
- `c6d57b1` fix(cicd): errors in dev env
- `a9911a5` cicd: debug output what normalization actually does (what columns) and timing
- `5b5adc5` fix: normalization order, reduced multiple normalizations
- `9f4d49c` fix: race condition normalization mesh rebuild, hacky ensureNormalizationsBeforeRebuild() added
- `fed2940` feat: helper util to delete unwanted layouts
- `ea3244d` feat: ensure windows are inside browser windw when creating from config.json
- `ec83642` feat: heatmap cut to top 50 elements if more
- `364cb30` docs: possible metrics
- `6e19630` docs: ideas for 3rd party library adoption
- `2430020` fix: freehand select reduce z-index to go behind lilgui

## 2026-03-01

- `098f3a7` fix: create windows after node data is built
- `b963645` fix: proper clone windows
- `e5511a9` feat: allow ?dataset=asdf or /dataset uri
- `3714b3a` feat: heatmap num items limit
- `2619505` feat: store/layout in config
- `5ed9a9b` feat: heatmap diagonalbar grey
- `fe817a6` feat: heatmap
- `c74f5d7` feat: kv split toggle for distributions
- `67caddd` feat: new global distribution chart that aggregates a and uses same logic as subset distribution
- `874bf15` fix: switched vite to mpa, so 404 dont load default app and trigger multiple function calls

## 2026-02-28

- `c9df868` feat: subset network changes, upload script multiple datasets, revert color palette

## 2026-02-27

- `68f8b76` fix: temporarily removing show labels
- `0cc0d46` feat: calcs, expand subset
- `4802963` feat: new network window
- `78d52b3` chore: refactor preset/config stuff into own module
- `29f3609` chore: centralize stuff in window manager
- `01ba895` chore: refactor legacy popup windows into windows system
- `c7bb49d` fix: clear subset, close windows when switching dataset
- `f78f3b3` fix: limit presets to dataset when populating preset dropdown
- `6e193b7` fix: refine preset loading, presets per layout, get rid of presets.json and use config.json

## 2026-02-26

- `5570415` chore: console cleanup, remove auto init preset

## 2026-02-25

- `5a46655` feat: llm stuff markdown, table dist changes for binning

## 2026-02-24

- `cad4270` feat(ui): collapse window to bottom edge if snapped there already

## 2026-02-23

- `4e8b84a` add windows state export and restore, z index fixes for tooltip and search, controls unfolded, chart white numbers instead black
- `576bf4e` feat: subset query allow unicode chars
- `bacfddc` feat: library query, drag drop nodes to 3d explorere
- `237b9c8` feat: duplicate windows, subset query library
- `961df3e` fix: get rid of data in preset
- `263cfd1` feat(ui): windows snap to each other and edges
- `ccfd3aa` ui: uibar smaller
- `4dc06ab` ui: uibar smaller
- `4ae2532` fix: no subset changes in search enter
- `44c28f1` Floating window improvements: header dropdown, editable title (subset table), icons
- `62fab92` feat: window icons
- `fc1315d` fix: small stuff

## 2026-02-22

- `5a7f7b7` fix: default values lilgui
- `f21dfac` fix: settings button in ui also open settings wdw when closed with x
- `b4599d5` feat: webgpu bloom
- `1780b91` feat: webgpu working, indicator emoji, forcewebgl uri support
- `3dc0e07` WebGPU: fix texture update, node material TSL/flows, stats overlay
- `81126d4` Adopt latest Three.js BatchedMesh: core culling/raycast, minimal onBeforeRender
- `14b272a` cidi: upload relative paths support
- `dc51214` chore: update modules
- `48879d7` fix: relative paths for prod builds
- `3fbd552` chore: delete unused and cleanup
- `a17cf61` lib2app refactor: restructure repo as standalone graph app
- `cb4de04` feat: pulse active node
- `890c961` chore: rm deadcode, no rebuild meshes for highlights
- `3956a78` perf: reduced to 3 meshes
- `b636064` fix: depth stuff
- `c8a38ca` perf: configurable depth sort, selective bloom, and sort removal

## 2026-02-21

- `46eb5de` fix: texture memory leak
- `caa1040` fix: zlayering
- `6b1cd84` fix: lasso ui bar fixes
- `20eb9ca` feat: lasso, interact modes, uibar
- `b1fa64f` feat: user modes, interact select
- `ff3e5c3` refactor: renderer out
- `37b5fae` more refactor
- `da5645c` rm tmp files
- `ec7d829` remove dead code
- `6418b44` refact00r0r0r0
- `6a84aab` refactor
- `a4d1b0c` refactor: whatever
- `3849f95` refactor: more stuff
- `30de54d` refactor: attribute resolvers, kv parsing, meshes, chart, presets
- `7120d2b` refactor: windows in own files
- `9e34b84` refactor: removed sidebar
- `186679a` refactor: highlight settings from sidebar to own section in settings window
- `275d09e` refactor(windows): a lot
- `5d02751` refactor: windows
- `484268f` Windows refactor: FloatingWindow, AppEvents, icon bar, pop-out windows (table/builder/dists/KV), SidePanelHandlers, color/mesh normalization

## 2026-02-20

- `8d8caa4` docs: pubsub refactor plan
- `cce664f` feat: global color per column refined
- `c6d2704` feat: barchart improvements
- `c27368b` feat(table): sticky header, sticky content on high rows
- `512aaf3` feat: colors for table categoriesd _a _kv etc
- `76c7e80` feat: inlineview for table
- `fb1d2be` feat: better table with tooltip
- `7a6e6d9` fix: lint errs
- `d7ac59c` fix: highlight edges
- `405ba1f` fix: no grey in catagorical colors
- `91902bb` fix: depth write for highlighted nodes
- `e3fd0b2` fix: edge color gets recalculated and gets darker and darker
- `e75202a` fix: reapply highlighting when mesh rebuilt by changing attribute dropdowns
- `f2f7065` feat: simplify to common material that supports opacity + glow
- `518483e` feat: bloom highlighted, fade others
- `cec1f9f` feat: highligh nodes toggle, usegeneid if exists for molecular viewer

## 2026-02-19

- `8099e19` feat: extract keys from _c_kv and create extra categorival items in cat dropdowns like color etc
- `daf3ed5` feat: has/substr feature for querly language
- `583cdc2` mix: tsv tools

## 2026-02-18

- `cf1b95a` plan: refactor windows

## 2026-02-17

- `901111c` feat: 3d popup
- `a2ff5ee` Merge branch 'logbook' into main
- `a509d7c` Support both raw numbers and letter+number in 3dhl column

## 2026-02-16

- `2f999ca` no idea

## 2026-02-13

- `5de03f7` feat: binning on off toglgle in distribution chart
- `7898777` feat: clickable nodes in table
- `2cd125a` fixes: 3d popup
- `0db1233` feat: 3d viewer, sidebar list labels molecule elements
- `2196dbd` fix:highlights
- `df4b8bc` fix:highlights
- `f06ecce` feat: highlights from column for 3d viewer
- `6765df7` feat: highligh on hover in 3dmol viewer
- `ccdfec6` 3D structure popup (p key), Alt tooltip removed, lower-right popup, auto-update on hover, node label, transparent bg

## 2026-01-26

- `91a653f` misc: reduce deswcription tooltip cutoff
- `4e0d948` fix: tooltip ctrl cleanup

## 2026-01-24

- `777340b` fix: tooltip refinements
- `88b21fc` fix: 3rd tooltip refinement
- `b7be899` feat: 3rd ctrl tooltip
- `32726ef` feat: ctrl 3rd tooltip
- `0994900` fix: fog settings
- `1d4cabb` feat: fog
- `e069807` feat: focus mode
- `5683e34` fix: arrow keys removed
- `1679d6c` refactor: keyboard shortcuts
- `e551981` docs: hints in menu
- `256f802` feat: relayout increment factor
- `1c32a51` feat: relayout
- `503d8f0` feat: upload script
- `6e4192a` feat: delete browserstorage
- `a3c15a7` feat: tooltip switching
- `e73a3e1` feat: secondary tooltip

## 2026-01-16

- `71fef29` aattribute scaling
- `1223104` verify, no idea

## 2025-12-02

- `2082dcb` no idea

## 2025-11-24

- `169253a` fix: explosion + highlighted
- `cb3b226` feat: esc to clear subset
- `33c12bd` feat: explosion forced subset
- `cc8b76b` feat: alt qwe with different movement scales
- `f2da575` feat: multiexplosion
- `bd398dc` feat: explosion + halfexplosion + reset fix with alt xyr

## 2025-11-23

- `c7d268f` feat: explosion
- `0cee8d8` clean up data git
- `aa62aef` report show
- `3758f50` search stuff
- `d0eea8b` search tool
- `e982987` removed animation between preset loads
- `0530034` tooltip stuff
- `49aaf50` tooltip uiux
- `701310a` (refactor): tooltip
- `ea345a4` (fix): iwas

## 2025-11-22

- `63cd1f9` (fix): verwaisteinit highlighted edge fix
- `f707c26` (fix): edge lookup for hover
- `167aadf` lil ui reorder
- `e338cf5` blavla
- `ed77750` fix: autoload preset constrained to current dataset
- `2c56299` bugfixes: reset values of newly seleted attribute if they are null instead of keeping previous

## 2025-11-21

- `fdfaf18` bugfixes kv _a metric dist
- `e052bdb` feat: kv
- `ba678f3` feat: temporary tsv values
- `2694edb` hoverbox updates uiux
- `e7c552a` meshes

## 2025-11-20

- `bebe559` feat: animation
- `a1cfec8` feat(): layouts
- `07ab196` feat(socialnotebook): categorical parsing for edge attributes

## 2025-11-18

- `90fef90` fix: stuff
- `ef6117e` feat: network dist details
- `eef1b8d` feat: lol hardcoded terms

## 2025-11-13

- `5287adf` varun data

## 2025-10-30

- `90e02bb` Merge branch 'webpub' into main
- `b44982d` feat: preset json

## 2025-10-29

- `3f65cbd` feat: excel copy paste
- `5144c52` fix: selection hilight management
- `7246320` feat: styling
- `7fc6829` feat: dist table for subset cols
- `aed53ae` feat: small stuff i think
- `d592d70` feat: query engine
- `fb5d296` feat: add whole cluster
- `e39daba` fix: side panel dfixes

## 2025-10-28

- `9b0dd08` feat: side panel details
- `7ef32a5` feat: side panel details
- `aceae6d` feat: side panel
- `d4ce2f8` feat: subset panel
- `fb7765b` feat: subset panel
- `193b8e5` feat: subset highlighting
- `4be49d7` fix: node selection bugfix (index over multiple meshes)
- `9c0ba2f` feat: multiple meshes and mesh select by attributer
- `5b22281` feat: load/save settings
- `9fe6a47` fix attribute detection with _norm postfix

## 2025-10-27

- `de56692` edge transparency
- `9f4cd1f` q
- `d5aa3be` feat: edge node color attr
- `54a9d5d` feat: select edge attr for width

## 2025-10-26

- `7ca76ab` experiment: per object culling very simple geo
- `2457586` removed animation, simplified geo further, box to line, etc
- `da3afdb` fix: iwas
- `ca2ad2a` fix: tooltips
- `f89a276` sdfg
- `a4da657` asf

