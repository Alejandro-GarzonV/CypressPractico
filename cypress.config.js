const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  //retries:1, // ESTO  REINTENTA LOS FALLIDOS PERO NO CAMBIA EL RESULTADO EN TIEMPOS
  // configuracion del allure 
  env: {
    allure: true,
    allureResults: 'allure-results',
    allureResultsWatchPath: 'allure-results',
    allureLogCyCommands: true,
    allureSkipCommands: 'screenshot,wait',
    allureWrapCustomCommands: true,
    allureCleanResults: false,
    allureAttachRequests: false,
    allureCompactAttachments: true,
    allureAddVideoOnPass: false,
    //tmsPrefix: 'http://jira.com',
    //issuePrefix: 'http://jira.com/PROJECT-1/*/browse'
  },
  e2e: {
    viewportWidth: 1280, // Ancho del viewport en píxeles
    viewportHeight: 720, // Alto del viewport en píxeles


    setupNodeEvents(on, config) {
      
      configureAllureAdapterPlugins(on, config);

      // Si usas el evento after:spec
      on('after:spec', async (spec, results) => {
        // tu código en after spec
        await configureAllureAdapterPlugins(on, config).afterSpec({ results });
      });
      return config;
    },
    
  },
 // "pageLoadTimeout": 120000,
});
