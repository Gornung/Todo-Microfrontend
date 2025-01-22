module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.scss$': 'jest-transform-stub',
    },
    testMatch: ['**/src/**/*.{test,spec}.{t,j}s?(x)'],
};
