
module.exports = {
    clearMocks: true,

    collectCoverage: true,
    coverageDirectory: 'coverage',

    coverageProvider: 'v8',

    coverageReporters: [
        'json'
    ],


    setupFilesAfterEnv: [
        "./tests/jest.setup.ts"
    ],

    testMatch: ["<rootDir>/tests/**/*.test.ts"],

    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },

};