import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: false }],
  },
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;
