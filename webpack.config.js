// Imports: Dependencies
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
require('babel-register');

const paths = {
  src: path.join(__dirname + '/src'),
  build: path.join(__dirname + '/dist')
};

// Webpack Configuration
const config = {
  devtool: 'source-map',
  stats: 'minimal',
  // Entry
  entry: {
    index: paths.src + '/pages/index/index.js'
  },
  // Output
  output: {
    path: paths.build,
    filename: 'js/[name].js'
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.scss$/,
        //include: paths,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        //include: paths,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  // Plugins
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'common'],
      template: paths.src + '/pages/index/index.html',
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(paths.src + '/sprite'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(paths.src + '/img/sprite.png'),
        css: path.resolve(__dirname, 'src/scss/base/sprite.scss')
      },
      /* customTemplates: {
          'scss.template.mustache': './scss.template.mustache'
      }, */
      apiOptions: {
        cssImageRef: '../../img/sprite.png'
      }
    })
  ]
};
// Exports
module.exports = config;
