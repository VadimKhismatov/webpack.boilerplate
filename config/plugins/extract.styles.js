'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  const plugin = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "assets/css/[name].css",
    chunkFilename: "[id].css"
  });
  return plugin;
};