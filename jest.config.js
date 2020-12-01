module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['<rooDir>/src/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnviroment: 'node',
  roots: ['<rootDir>/src']
}
