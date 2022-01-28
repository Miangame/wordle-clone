module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/config/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts'
  },
  transformIgnorePatterns: ['./node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/config']
}
