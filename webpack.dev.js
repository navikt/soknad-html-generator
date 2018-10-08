const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const port = process.env.PORT || 9000;

module.exports = merge.strategy({
  'module.rules': 'append'
})(common, {
  mode: 'development',
  entry: {
    main: [
      './src/server.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'dev'),
    publicPath: 'http://localhost:' + port + '/',
    filename: 'main.js',
  },
});