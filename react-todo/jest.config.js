const jestConfig = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/__mocks__/fileTransformer.js'
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom']
};

export default jestConfig;
