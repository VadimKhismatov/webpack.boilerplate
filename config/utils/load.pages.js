'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (dirname) => {

  const pagesSrcUrl = '/src/pages';
  const pages = {
    entries: {},
    htmlOptions: []
  };
  const list = fs.readdirSync(path.resolve(dirname + pagesSrcUrl));

  list.forEach((_page) => {

    const pageUrl = path.resolve(path.join(dirname, pagesSrcUrl, _page, 'index.js'));
    // save page netry url
    pages.entries[_page] = pageUrl;

    const htmlOption = new HtmlWebpackPlugin({
      filename: `${_page}.html`,
      chunks: [`${_page}`, 'common'],
      template: path.resolve(path.join(dirname, pagesSrcUrl, _page, 'index.html')),
      hash: true,
    });

    pages.htmlOptions.push(htmlOption);


  });

  return pages;

}