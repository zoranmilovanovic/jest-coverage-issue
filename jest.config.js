const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
    ...jestConfig,
    modulePathIgnorePatterns: ['<rootDir>/.localdevserver'],
    roots: ["<rootDir>/force-app/main/default/lwc/"],
    coverageThreshold: {
        "./force-app/main/default/lwc/**/*.js": {
        branches: 85,
        functions: 85,
        lines: 85
        }
    }
};
