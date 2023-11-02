import type {Config} from '@jest/types'
const config: Config.InitialOptions = {
  verbose: false,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: false, // true para gerar o relatório de cobertura
  coverageDirectory: 'src/tests',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/enums',
    '<rootDir>/src/interfaces',
    '<rootDir>/src/middlewares',
    '<rootDir>/src/schemas',
    '<rootDir>/src/models'
  ],
  collectCoverageFrom: ['src/**', '!src/interfaces/**', '!src/enums/**', '!src/tests/**'],
  testPathIgnorePatterns : [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '@enums/(.*)$': '<rootDir>/src/enums/$1',
    '@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
    '@models/(.*)$': '<rootDir>/src/models/$1',
    '@routes/(.*)$': '<rootDir>/src/routes/$1',
    '@schemas/(.*)$': '<rootDir>/src/schemas/$1',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@tests/(.*)$': '<rootDir>/tests/$1'
  }
}

export default config
