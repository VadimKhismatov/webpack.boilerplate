'use strict';

module.exports = () => {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  }
}