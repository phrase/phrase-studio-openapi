window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: "/app/schemas/projects.json",
    "dom_id": "#swagger-ui",
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    queryConfigEnabled: false,
  })
};
