module.exports = {
    rootUrl: 'http://test-server:9000',
    screenshotsDir: './baseline',

    browsers: {
        chrome_large: {
            gridUrl: 'http://chrome:5555/wd/hub',
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
