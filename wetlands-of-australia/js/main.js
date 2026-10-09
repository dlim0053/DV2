// Embed each Vega-Lite specification into its container.
const figures = {
  choropleth: "vega/choropleth.vg.json",
  symbols: "vega/symbol_map.vg.json",
  flow: "vega/flow_map.vg.json",
  heatmap: "vega/heatmap.vg.json",
  slope: "vega/slope_chart.vg.json",
  multiples: "vega/small_multiples.vg.json",
  pictogram: "vega/pictogram.vg.json",
  bars: "vega/grouped_bar.vg.json",
  radar: "vega/radar.vg.json",
  sunburst: "vega/sunburst.vg.json",
  treemap: "vega/treemap.vg.json",
  alluvial: "vega/alluvial.vg.json"
};
const options = { actions: { export: true, source: true, compiled: false, editor: false } };
Object.entries(figures).forEach(([id, url]) =>
  vegaEmbed("#" + id, url, options).catch(console.error));
