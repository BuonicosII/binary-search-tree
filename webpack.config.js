const path = require('path');

module.exports = {
  entry: './src/binary-tree-search.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};