var webpack = require('webpack');

module.exports = {
  target: 'node',
  devtool: 'source-map',
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