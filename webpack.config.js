var webpack = require('webpack');


const port = process.env.PORT || 9000;

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'source-map',
  entry: {
    main: [
      './src/server.js',
    ],
  },
  output: {
    publicPath: 'http://localhost:' + port + '/',
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(html)$/,
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
};