// const { defaults } = require('jest-config');
module.exports = {
    // bail: 1,
    verbose: true,
    // coverageDirectory: "<rootDir>/tests/coverage/",
    moduleFileExtensions: [
        // ...defaults.moduleFileExtensions,
        "js",
        "json",
        "vue"
    ],
    moduleDirectories: [
        "<rootDir>/node_modules",
    ],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/components/*.{js,vue}",
        "!**/node_modules/**"
    ],
    coverageReporters: [
        // "html",
        "text-summary",
        "lcov",
        "text",
        // "json"
    ],
    displayName: {
        name: 'CLIENT',
        color: "blue"
    },
    // testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testMatch: ["**/*test.js",],

}

 // ,
  // "jest": {
  //   "coverageThreshold": {
  //     "global": {
  //       "branches": 50,
  //       "functions": 50,
  //       "lines": 50,
  //       "statements": 50
  //     },
  //     "./src/components/": {
  //       "branches": 40,
  //       "statements": 40
  //     }
  //   }
  // }