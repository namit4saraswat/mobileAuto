/** @type {CodeceptJS.MainConfig} */
require('dotenv').config();
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: process.env.APP,
      host: "hub-cloud.browserstack.com",
      port: 4444,
      platform: "android",
      user: process.env.USER,
      key: process.env.KEY,
      device: "Samsung Galaxy S22 Ultra"
    }
  },
  gherkin: {
    features: './tests/features/*.feature',
    steps: ['./tests/step_definitions/login_steps.js',
      './tests/step_definitions/landingPage_steps.js',
      './tests/step_definitions/webView_steps.js'
    ]
  },
  include: {
    I: './steps_file.js'
  },
  name: 'mobileAuto',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
  }
}

//{"app_url":"bs://4bf78c788130b3745c69d8645395f272719ae348"}