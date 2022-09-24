import { defineConfig } from "cypress";

export default defineConfig({

  "reporter": "mochawesome",
  "reporterOptions": {
  "reportDir": "reports",
  "overwrite": false,
  "html": false,
  "json": true,
  "screenshotOnRunFailure": true,
  "inlineAssests":true
},
  e2e: {
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
