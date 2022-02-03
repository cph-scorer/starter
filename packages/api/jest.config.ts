/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  clearMocks: true,
  reporters: ['default'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['text', 'json'],
};
