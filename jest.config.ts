import type {Config} from '@jest/types'
const config: Config.InitialOptions = {
  verbose: false,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: false, // true para gerar o relatório de cobertura
  coverageDirectory: 'src/test',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/enum',
    '<rootDir>/src/interface',
    '<rootDir>/src/middleware',
    '<rootDir>/src/schema',
    '<rootDir>/src/model'
  ],
  collectCoverageFrom: ['src/**', '!src/interface/**', '!src/enum/**', '!src/type/**', '!src/test/**'],
  testPathIgnorePatterns : [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '@domain/(.*)$': '<rootDir>/src/domain/$1',
    '@enum/(.*)$': '<rootDir>/src/enum/$1',
    '@interface/(.*)$': '<rootDir>/src/interface/$1',
    '@middleware/(.*)$': '<rootDir>/src/middleware/$1',
    '@model/(.*)$': '<rootDir>/src/model/$1',
    '@route/(.*)$': '<rootDir>/src/route/$1',
    '@schema/(.*)$': '<rootDir>/src/schema/$1',
    '@type/(.*)$': '<rootDir>/src/type/$1',
    '@test/(.*)$': '<rootDir>/test/$1',
    '@util/(.*)$': '<rootDir>/util/$1'
  }
}

export default config
