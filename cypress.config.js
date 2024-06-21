const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');
//For Cucumber Integration
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

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
      // configuracion  cucumber 
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', createBundler());
      configureAllureAdapterPlugins(on, config);

      // Si usas el evento after:spec
      on('after:spec', async (spec, results) => {
        // tu código en after spec
        await configureAllureAdapterPlugins(on, config).afterSpec({ results });
      });
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
  },
 // "pageLoadTimeout": 120000,
});
