const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    type: "cucumber",
    baseUrl: 'https://www.automationexercise.com/',
    excludeSpecPattern: [],
    supportFile: false,
  },
});
