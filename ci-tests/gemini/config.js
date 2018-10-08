module.exports = {
    gridUrl: 'http://chrome:4444/wd/hub',
    rootUrl: 'http://test-server:9000',
    screenshotsDir: './baseline',

    browsers: {
        chrome_large: {
            desiredCapabilities: {
                browserName: 'chrome',
            },
            windowSize: '800x10000',
        }
    },

    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: false,
                path: '/reports/gemini',
                defaultView: 'all',
            },
        },
    },
};
