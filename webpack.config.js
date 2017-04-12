var path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-eval-source-map'
};