// Malaysia Economic Dashboard - Visualization Loader
// FIT3179 Data Visualisation Project

// Define visualization specifications
const vizSpecs = {
  map: "map_choropleth.vg.json",
  gdpTrends: "gdp_trends.vg.json",
  sectoral: "sectoral_composition.vg.json",
  unemployment: "unemployment_duration.vg.json"
};

// Embed options for consistent styling
const embedOpt = {
  "actions": {
    "export": true,
    "source": false,
    "compiled": false,
    "editor": false
  },
  "theme": "latimes"
};

// Load and embed all visualizations
function loadVisualizations() {
  // Choropleth Map
  vegaEmbed("#map", vizSpecs.map, embedOpt)
    .then(function(result) {
      console.log("Map loaded successfully");
    })
    .catch(function(error) {
      console.error("Error loading map:", error);
      document.getElementById("map").innerHTML = 
        `<div style="color: red; padding: 20px;">
          <strong>Error loading map:</strong> ${error.message}<br>
          <small>Please ensure malaysia_states.geojson is in the same directory</small>
        </div>`;
    });

  // GDP Trends Line Chart
  vegaEmbed("#gdp_trends", vizSpecs.gdpTrends, embedOpt)
    .then(function(result) {
      console.log("GDP Trends loaded successfully");
    })
    .catch(function(error) {
      console.error("Error loading GDP trends:", error);
      document.getElementById("gdp_trends").innerHTML = 
        `<div style="color: red; padding: 20px;">
          <strong>Error loading GDP trends:</strong> ${error.message}
        </div>`;
    });

  // Sectoral Composition Bar Chart
  vegaEmbed("#sectoral_composition", vizSpecs.sectoral, embedOpt)
    .then(function(result) {
      console.log("Sectoral composition loaded successfully");
    })
    .catch(function(error) {
      console.error("Error loading sectoral composition:", error);
      document.getElementById("sectoral_composition").innerHTML = 
        `<div style="color: red; padding: 20px;">
          <strong>Error loading sectoral composition:</strong> ${error.message}
        </div>`;
    });

  // Unemployment Area Chart
  vegaEmbed("#unemployment", vizSpecs.unemployment, embedOpt)
    .then(function(result) {
      console.log("Unemployment chart loaded successfully");
    })
    .catch(function(error) {
      console.error("Error loading unemployment chart:", error);
      document.getElementById("unemployment").innerHTML = 
        `<div style="color: red; padding: 20px;">
          <strong>Error loading unemployment chart:</strong> ${error.message}
        </div>`;
    });
}

// Load visualizations when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadVisualizations);
} else {
  loadVisualizations();
}