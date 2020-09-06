module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: ['<rootDir>/tests/**/*.test.ts', '<rootDir>/src/**/*.test.ts'],
  verbose: true,
  clearMocks: true,

  globals: {
    'ts-jest': {
      target: 'es2017',
      module: 'ESNext',
      moduleResolution: 'Node',
      tsconfig: './tsconfig.json',
      compiler: 'ttypescript',
    },
  },
}
