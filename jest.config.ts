import type {Config} from '@jest/types'
// Sync object
const config: Config.InitialOptions = {
  verbose: false,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: false, // true para gerar o relatório de cobertura
  coverageDirectory: 'tests',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/enum',
    '<rootDir>/src/interface',
    '<rootDir>/src/middleware',
    '<rootDir>/src/notificacao',
    '<rootDir>/src/schema'
  ],
  collectCoverageFrom: ['src/**', '!src/interfaces/**', '!src/enums/**'],
  testPathIgnorePatterns : [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '@routes/(.*)$': '<rootDir>/src/routes/$1',
    '@models/(.*)$': '<rootDir>/src/models/$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@tests/(.*)$': '<rootDir>/tests/$1',
    '@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '@enums/(.*)$': '<rootDir>/src/enums/$1',
    '@interfaces/(.*)$': '<rootDir>/src/interfaces/$1'
  }
}

export default config
