import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});

const ignoreModules = ["nanoid"].join("|");

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [`/node_modules/(?!${ignoreModules})`],
  moduleNameMapper: {
    "^@/components\/(.*)$": "<rootDir>/src/components/$1",
    "^@/db\/(.*)$": "<rootDir>/src/db/$1",
    "^@/lib\/(.*)$": "<rootDir>/src/lib/$1",
    "^nanoid(/(.*)|$)": "nanoid$1",
  },
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)