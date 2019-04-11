'use strict';

const webpack = require('webpack');

// PLUGINS
const sprite = require('../plugins/sprite');
const extractCss = require('../plugins/extract.styles');

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
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    sprite(paths, dirname)
  ];


  // add ExtractCSSPlugin for build
  if (isBuild === 'true') {
    plugins.push(extractCss());
  }

  // Webpack Configuration
  const config = {
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    devServer: {
      port: 8080,
      hot: true,
      index: 'home/index.html'
    },
    // Loaders
    module: {
      rules: rules
    },
    // Plugins
    plugins: plugins
  };

  return config;

};
