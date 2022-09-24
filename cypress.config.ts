import { defineConfig } from "cypress";
import cypressMochaawesome from "cypress-mochawesome-reporter/plugin";

export default defineConfig({

  reporter: "cypress-mochawesome-reporter",
  video:false,
  screenshotOnRunFailure: true,
  screenshotsFolder: "reports/screenshots",
  reporterOptions: {
    reportDir: "reports",
    overwrite: false,
    html: false,
    json: true,
    embeddedScreenshots:true,
    inlineAssets:true
},
  e2e: {
    specPattern: "cypress/e2e/*.cy.ts",
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on,config) {
      cypressMochaawesome(on);
      // implement node event listeners here

    },
  },
});
