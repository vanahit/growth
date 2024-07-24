export default {
        testEnvironment: 'jest-environment-jsdom',
        moduleNameMapper: {
            '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/tests/mocks/fileMock.ts',
            '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
            '^components/(.*)$': '<rootDir>/src/components/$1',
            '^tests/(.*)$': '<rootDir>/src/tests/$1',
            '^themeProvider/(.*)$': '<rootDir>/src/themeProvider/$1',
            '^routes/(.*)$': '<rootDir>/src/routes/$1',
            '^assets/(.*)$': '<rootDir>/src/assets/$1',
        },
        setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
        transform: {
            '^.+\\.jsx?$': 'babel-jest',
            '^.+\\.tsx?$': 'babel-jest'
        },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/'
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/', // Ignore all .styles.ts files
        '\\.css$',        // Ignore all .css files
        '\\.scss$',       // Ignore all .scss files
        '\\.(styles?|style)\\.tsx?$',// Ignore all .scss files
        '\\.(types?|type)\\.tsx?$',// Ignore all .scss files
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.ts',
        '!src/serviceWorker.ts',
        '!src/setupTests.ts'
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
