# Data sources and notes — Wetlands of Australia (FIT3179 DV2)

Compiled 8 Oct 2026. Every value is traced to a source below. Nothing is estimated or invented.
Derived values (sums, shares, cumulative totals) are computed from those sources and labelled as derived.

## Sources (cite all of these on the page)
1. DCCEEW, *Ramsar Wetlands of Australia* (data.gov.au), CC BY 3.0 AU. `Ramsar_Wetlands.csv`: state, area, designation date for 67 sites.
2. Ramsar Sites Information Service, https://rsis.ramsar.org. Official coordinates for Gwydir (site 993).
3. Wikipedia, "List of Ramsar sites in Australia" (derived from RSIS). Coordinates for the other 66 sites. Cite as a secondary source.
4. EAAFP, https://www.eaaflyway.net/?p=68454 (Australia) and ?p=31760 (Malaysia). Flyway site coordinates.
5. DCCEEW, Section 2 Threatened Species State Lists (28 Aug 2026). 2,222 rows; 2,119 non-extinct used.
6. Revised 2025 population estimates for 37 migratory shorebirds (project file).
7. DCCEEW, CAPAD 2024 terrestrial national summary (project file `capad-2024-terrestrial-national.xlsx`). Data current to 30 June 2024.
8. Environment Australia (2001), *A Directory of Important Wetlands in Australia*, 3rd ed., Appendix 1 (Tables A1.1 to A1.4, A1.6) and Chapter 2 (type names). https://www.agriculture.gov.au/sites/default/files/documents/directory-appendix.pdf and directory-ch2.pdf
9. Basemaps: `states.geojson` from github.com/rowanhogan/australian-states (simplified here); `world-110m.json` from vega-datasets (Natural Earth). Check each licence before submission.

## Files (data/)
| File | Rows | Used for |
|---|---|---|
| ramsar_sites_clean.csv | 67 | Proportional symbol map; site counts |
| ramsar_state_summary.csv | 9 | State totals (EXT = external territories) |
| ramsar_cumulative_by_state.csv | 468 | Small multiples (cumulative Ramsar hectares by designation year) |
| ramsar_slope_1990_2025.csv | 9 | Slope chart |
| eaafp_flyway_sites.csv | 26 | Flow map (Bako Buntal Bay to 25 Australian sites) |
| capad2024_by_jurisdiction.csv | 9 | % of each state's land protected (choropleth colour) |
| capad2024_by_type.csv / _by_governance.csv | 94 / 4 | Optional treemap or pictogram of protected-area types |
| diwa_sites_by_state.csv | 9 | Directory sites per state |
| diwa_type_by_state.csv | 360 | Heatmap, sunburst, alluvial (state x wetland type) |
| diwa_type_national.csv | 40 | Treemap |
| diwa_criteria_by_state.csv | 54 | Optional |
| threatened_state_group_status.csv | state x group x status | Radar, heatmap |
| threatened_group_status.csv | group x status | Grouped bar |
| shorebird_estimates_2025.csv | 37 | Pictogram (15 of 37 threatened-listed) |
| state_summary_combined.csv, state_protection_combined.csv | 9 / 8 | Joined state tables |
| australia_states.geojson, world-110m.json | | Basemaps |

## Idiom to data (what is now supported)
| # | Idiom | Data | Change from sketch |
|---|---|---|---|
| 1 | Choropleth | CAPAD % protected by state (colour), Ramsar and DIWA counts (tooltip) | Shows protected land share, not wetland extent |
| 2 | Treemap | DIWA wetland types, category then type | None |
| 3 | Sunburst | DIWA: state, category, type | Counts sites, not species |
| 4 | Radar | Threatened species by group, per state | Axes are taxonomic groups, not wetland types |
| 5 | Proportional symbol map | Ramsar sites, symbol size = gazetted area | None |
| 6 | Isotype | 15 of 37 flyway shorebirds threatened-listed | None |
| 7 | Flow map | EAAFP sites | Lines show network links, not tracked bird paths (see below) |
| 8 | Matrix heatmap | DIWA: state x wetland type | Was wetland type x threat. No real threat data was found. |
| 9 | Slope chart | Ramsar hectares by state, 1990 vs 2025 | Was DEA time series |
| 10 | Small multiples | Cumulative Ramsar hectares by state | Was DEA time series |
| 11 | Alluvial | DIWA: state, category, top types | Was type to conservation status |
| 12 | Grouped bar | Threatened species by group and status | Was protected vs unprotected |

Tell your tutor about the changed idioms, since the spec requires adherence to the submitted sketch.

## Corrections made (mention in the "What" write-up)
- Gwydir Wetlands: Wikipedia coordinates duplicated Fivebough Swamp. Replaced with RSIS 29°15'26"S 149°14'06"E.
- Cape Barren Island lagoons: Wikipedia numbers it RS255; the CSV has RS256. Matched by name.
- EAAFP page errors, replaced with Ramsar coordinates: Western Port (duplicated Port Phillip), Shoalwater Bay (showed Shallow Inlet), Currawinya (-25.8 vs -28.75), Pulu Keeling (showed Gulf of Carpentaria).
- EAAF149 Wernadinga Coast coordinate is INFERRED from a misplaced block on the EAAFP page. Verify on the EAAFP site card before submission.
- EAAF094 appears twice in the supplied site list. The EAAFP page shows Port Phillip Bay as EAAF065.
- EAAF015 is named Ord River Floodplain by EAAFP (Parry Lagoons lies inside it).
- CAPAD file: it is readable. An earlier note that it was not was wrong.
- DIWA Table A1.2/A1.3: state rows for A1 and B6 sum to 79 and 162, but the source prints totals of 80 and 164. State rows are used as published. National totals here come from the rows.
- DIWA Table A1.4 vs text: the source text calls aquaculture "C3 (n=13)", but the table has 13 under C2. Treat C2 and C3 as one pooled group.

## Cautions (state these on the page)
- DIWA is the 2001 3rd edition and is no longer updated. It is the latest national directory, but it is old. Say so.
- DIWA counts "representations" (a site with several types counts once per type), so type counts do not sum to 851 sites.
- Ramsar gazetted area differs from GIS area for some sites (e.g. Kerang 9,419 vs 3,080 ha). Gazetted area is used.
- The Ramsar time series uses each site's CURRENT gazetted area at its designation year. It shows when sites were listed, not real changes in wetland area.
- Choropleth: Ramsar hectares include marine sites, so do not divide by land area without a caveat. CAPAD is terrestrial only.
- Threatened species have no habitat field. Counts cover all habitats, not wetland species only. Do not say "wetland species".
- Section 2 shows Great Knot as Vulnerable and Bar-tailed Godwit as Endangered. Other sources describe 2016 critically endangered listings. Check the SPRAT profiles before quoting a status.
- Flow map: the EAAFP list is a site network, not tracking data. No per-site bird counts exist in the project, so use uniform lines and label them "flyway-linked sites". Only one Malaysian site (Bako Buntal Bay, Sarawak) is in the network.
- CAPAD type areas overlap, so they sum to more than the national total. Use shares of the sum.
- Shorebird estimates are ranges for some species (pop_low, pop_high); say whether you plot the low value or the midpoint.

## Still not obtained
- Digital Earth Australia time-series percentages (not available as downloadable numbers from the sources reached).
- Wetland type per Ramsar site and DIWA site-level attributes (area, coordinates per site). Only the published DIWA summary tables were obtained.
- Real threat-by-wetland-type data for the original heatmap.

## Derived chart tables (built from the files above, no new data)
- diwa_treemap.csv, diwa_sunburst.csv: node tables (id, parent, size) from diwa_type_by_state.csv; C2 and C3 pooled in the treemap.
- threatened_radar.csv: complete state x animal-group grid (zeros included) from threatened_state_group_status.csv.
- alluvial_nodes.csv, alluvial_links.csv: block and ribbon positions for the alluvial diagram, computed from ramsar_sites_clean.csv (state, decade listed, gazetted size class). Layout is precomputed; Vega draws it.
