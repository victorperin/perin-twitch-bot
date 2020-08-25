module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],

  globals: {
    'ts-jest': {
      compiler: "ttypescript",
    },
  },
};