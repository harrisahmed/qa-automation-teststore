const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  numTestsKeptInMemory: 50,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotsFolder: "cypress/videos",
  
  e2e: {
    baseUrl: 'https://teststoreforsouthafri.nextbasket.shop/', 
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
