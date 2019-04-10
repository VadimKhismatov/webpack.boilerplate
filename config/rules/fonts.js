'use strict';

module.exports = () => {
  return {
    test: /\.(eot|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]',
    },
  }
}