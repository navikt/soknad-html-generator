const webpack = require('webpack');
const path = require('path');
const port = process.env.PORT || 9000;

module.exports = env => {
    return {
        mode: env.NODE_ENV,
        target: 'node',
        devtool: 'source-map',
        entry: {
            main: ['./src/server.ts'],
        },
        output: {
            path: path.join(__dirname, 'dist'),
            publicPath: 'http://localhost:' + port + '/',
            filename: 'main.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [{ loader: 'tslint-loader' }],
                    enforce: 'pre',
                },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    use: [{ loader: 'ts-loader' }],
                    exclude: /node_modules/,
                },
                {
                    test: /\.less$/,
                    use: [{ loader: 'css-loader' }, { loader: 'less-loader' }],
                },
                {
                    test: /\.(html)$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attrs: [':data-src'],
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
            }),
        ],
    };
};
