'use strict';

const webpack = require('webpack');
// PLUGINS
const sprite = require('../plugins/sprite');
const extractCss = require('../plugins/extract.styles');
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// RULES
const css = require('../rules/css');
const html = require('../rules/html');
const fonts = require('../rules/fonts');
const js = require('../rules/js');
const images = require('../rules/images');


module.exports = (paths, dirname) => {
  const isBuild = process.env.Build;

  // Rules
  let rules = [
    html(),
    fonts(),
    js(),
    images(),
  ];

  // add CSS rules
  rules = [...rules, ...css()];


  const plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    sprite(paths, dirname)
  ];


  // add ExtractCSSPlugin for build
  if (isBuild === 'true') {
    plugins.push(extractCss());
  }

  // Webpack Configuration
  const config = {
    mode: 'production',
    stats: 'verbose',
    // Loaders
    module: {
      rules: rules
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    },
    // Plugins
    plugins: plugins
  };

  return config;

};
