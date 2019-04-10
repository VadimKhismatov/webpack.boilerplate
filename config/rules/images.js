'use strict';

module.exports = () => {
  return {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
    ],
  }
}