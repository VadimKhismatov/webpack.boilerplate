'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {

  const inline = [
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']

    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],

    }
  ];

  const extract = [
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '/',
            hmr: process.env.Env === 'development'
          }
        },
        'css-loader',
        'postcss-loader',
        'sass-loader']

    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '/',
            hmr: process.env.Env === 'development'
          }
        },
        'css-loader',
        'postcss-loader'],

    }
  ];

  return process.env.Build === 'true' ? extract : inline;


}