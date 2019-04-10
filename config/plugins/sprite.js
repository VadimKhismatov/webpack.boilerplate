'use strict';
const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');


module.exports = (paths, dirname) => {

  const sprite = new SpritesmithPlugin({
    src: {
      cwd: path.resolve(paths.src + '/sprite'),
      glob: '*.png',
    },
    target: {
      image: path.resolve(paths.src + '/img/sprite.png'),
      css: path.resolve(dirname, 'src/scss/base/sprite.scss'),
    },
    customTemplates: {
      'scss.template.mustache': './scss.template.mustache'
    },
    apiOptions: {
      cssImageRef: '../../img/sprite.png',
    },
  });

  return sprite;

}