# Australia's wetlands, and the birds that connect them to Malaysia

A scrollable data story built with Vega and Vega-Lite for FIT3179 Data Visualisation 2 (Semester 2, 2026), Monash University Malaysia.

**Live page:** https://github.com/dlim0053/DV2.git
**Author:** Lim Ding Jian · **Date:** 8 October 2026

## About

The page asks a general Malaysian audience to look at Australia's wetlands. It starts with how much land Australia protects and what kinds of wetland it has, then shows where its 67 Ramsar sites are. It then follows the East Asian–Australasian Flyway, where migratory shorebirds link Malaysian and Australian shores, and looks at how many species are at risk and how the treaty has grown since 1974.

- **Domain:** Environment, Wetlands of Australia
- **Who:** the general Malaysian public, with no statistics or ecology background assumed
- **Why:** Australian wetlands rarely register with a Malaysian audience, yet the two countries are linked through migratory shorebirds
- **Format:** one scrollable page with no navigation that swaps sections

## The twelve figures

| # | Figure | Idiom | Engine | Spec |
|---|---|---|---|---|
| 1 | Share of each state's land that is protected | Choropleth map | Vega-Lite | `vega/choropleth.vg.json` |
| 2 | Wetland types in the Directory | Treemap | Vega | `vega/treemap.vg.json` |
| 3 | Make-up of wetland types by state | Sunburst | Vega | `vega/sunburst.vg.json` |
| 4 | Threatened animals by state and group | Radar chart (small multiples) | Vega-Lite | `vega/radar.vg.json` |
| 5 | Ramsar sites by area and decade | Proportional symbol map | Vega-Lite | `vega/symbol_map.vg.json` |
| 6 | Threatened flyway shorebirds | Isotype pictogram | Vega-Lite | `vega/pictogram.vg.json` |
| 7 | Flyway network sites linking Sarawak and Australia | Flow map | Vega-Lite | `vega/flow_map.vg.json` |
| 8 | Wetland types listed in each state | Matrix heatmap | Vega-Lite | `vega/heatmap.vg.json` |
| 9 | Ramsar-listed area by state, 1990 and 2025 | Slope chart | Vega-Lite | `vega/slope_chart.vg.json` |
| 10 | Ramsar-listed area added over time | Small multiples | Vega-Lite | `vega/small_multiples.vg.json` |
| 11 | Ramsar sites by state, decade and size | Alluvial diagram | Vega | `vega/alluvial.vg.json` |
| 12 | Threatened animals by group and status | Grouped bar chart | Vega-Lite | `vega/grouped_bar.vg.json` |

Three are maps (1, 5, 7). Vega-Lite has no built-in radar, treemap, sunburst or alluvial idiom, so the radar is drawn from computed polar coordinates, and the treemap, sunburst and alluvial diagram use full Vega layouts. The alluvial block and ribbon positions are precomputed and drawn by Vega.

## Repository structure

```
├── index.html            the page
├── README.md
├── css/style.css         typography and layout
├── js/main.js            embeds every spec with vega-embed
├── vega/                 one readable JSON spec per figure (12 files)
├── data/                 CSV, GeoJSON and TopoJSON files that the specs load
└── sketch/sketch.pdf     the hand-drawn sketch
```

## Run it locally

The page loads its specs and data with `fetch`, so it must be served over HTTP. Opening `index.html` directly from disk will not work.

- **VS Code:** install Live Server, right-click `index.html` and choose **Open with Live Server**.
- **Python:** run `python3 -m http.server 8000` in the repository root, then open http://localhost:8000.

Vega, Vega-Lite and vega-embed load from the jsDelivr CDN, and fonts (Young Serif, Instrument Sans) load from Google Fonts, so an internet connection is needed.

## Data sources

1. Department of Climate Change, Energy, the Environment and Water (DCCEEW), *Ramsar Wetlands of Australia*, data.gov.au (CC BY 3.0 AU). State, area and designation date for 67 sites.
2. Ramsar Sites Information Service, https://rsis.ramsar.org. Official coordinates for Gwydir Wetlands (site 993).
3. Wikipedia, "List of Ramsar sites in Australia" (derived from RSIS). Coordinates for the other 66 sites. This is a secondary source.
4. East Asian–Australasian Flyway Partnership (EAAFP), https://www.eaaflyway.net. Flyway site network and coordinates.
5. DCCEEW, *Section 2 Threatened Species State Lists*, extracted 28 August 2026. 2,222 listed species, of which 2,119 are not extinct and are used here.
6. *Summary of the revised 2025 population estimates for 37 migratory shorebirds*. Population estimates and flyway thresholds.
7. DCCEEW, *Collaborative Australian Protected Areas Database (CAPAD) 2024, terrestrial*. Share of each state's land that is protected, current to 30 June 2024.
8. Environment Australia (2001), *A Directory of Important Wetlands in Australia*, 3rd edition, Appendix 1 and Chapter 2. Wetland types by state for 851 sites.
9. Basemaps: `australian-states` GeoJSON from github.com/rowanhogan/australian-states (simplified here), and `world-110m.json` from vega-datasets (Natural Earth).

Derived values (sums, shares, cumulative totals) are computed from these sources and labelled as derived on the page.

## Data notes and corrections

- **Gwydir Wetlands:** Wikipedia's coordinates duplicated Fivebough Swamp. They were replaced with the RSIS value 29°15'26"S 149°14'06"E.
- **Cape Barren Island lagoons:** Wikipedia numbers it RS255 and the DCCEEW CSV has RS256. The two were matched by name.
- **EAAFP page errors:** the coordinates for Western Port, Shoalwater Bay, Currawinya and Pulu Keeling were wrong on the EAAFP page and were replaced with Ramsar coordinates.
- **EAAF149 (Wernadinga Coast):** the coordinate is inferred from a misplaced block on the EAAFP page and still needs checking against the site card.
- **EAAF094:** this ID appears twice in the supplied site list. The EAAFP page shows Port Phillip Bay as EAAF065.
- **EAAF015:** EAAFP names it Ord River Floodplain, and Parry Lagoons lies inside it.
- **DIWA totals:** the state rows for two wetland types sum to 79 and 162, while the source prints 80 and 164. The published state rows are used unchanged.
- **DIWA C2/C3:** the source text calls aquaculture "C3 (n=13)" but its table places 13 under C2. The two are pooled in the treemap.

## Limitations

- The Directory of Important Wetlands is the 2001 edition and is no longer updated. It is the latest national directory, but it is old.
- The Directory counts "representations": a site with several types counts once per type, so type counts do not add up to 851 sites.
- Ramsar gazetted area differs from GIS area for some sites (for example Kerang, 9,419 ha against 3,080 ha). Gazetted area is used.
- The Ramsar time series (figures 9 and 10) uses each site's current gazetted area from the year it was listed. It shows when sites were listed, not changes in wetland size.
- CAPAD is terrestrial only, so figure 1 shows the share of land that is protected, not wetland extent.
- The threatened species file has no habitat field, so counts cover all habitats and are not limited to wetland species.
- The flow map lines show links in the EAAFP site network, not tracked bird paths. The network lists only one Malaysian site, Bako Buntal Bay in Sarawak.
- Species statuses follow the August 2026 list and can change.