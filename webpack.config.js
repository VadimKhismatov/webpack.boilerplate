// Imports: Dependencies
const path = require('path');
const merge = require('webpack-merge');
const loadPages = require('./config/utils/load.pages');
const devConfig = require('./config/dev/index');
const prodConfig = require('./config/prod/index');

const paths = {
  src: path.resolve(path.join(__dirname, '/src')),
  build: path.resolve(path.join(__dirname, '/dist')),
};

console.log('Env: ', process.env.Env);
const isProd = process.env.Env === 'production' ? true : false;

// get URL for all pages.
const pages = loadPages(__dirname);

const _dev = devConfig(paths, __dirname);
const _prod = prodConfig(paths, __dirname);

// Webpack Configuration
const common = {
  // Entry
  entry: pages.entries,
  // Output
  output: {
    path: paths.build,
    filename: 'assets/js/[name].bundle.js',
    publicPath: process.env.Build === 'true' ? '../' : '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [...pages.htmlOptions],
};

let config = null;

if (!isProd) {
  config = merge(common, _dev);
} else {
  config = merge(common, _prod);
}

// Exports
module.exports = config;
