# My simple webpack boilerplate...
Trying to move from **gulp** to **webpack** =)<br>

## Some link to external libs: 

**SLICK CAROUSEL:**<br> 
css: "node_modules/slick-carousel/slick/slick.scss"<br>
css-theme: "node_modules/slick-carousel/slick/slick-theme.scss"<br>
js: "node_modules/slick-carousel/slick/slick.js"<br>
js-min: "node_modules/slick-carousel/slick/slick.min.js"<br>


## NPM Commands:
**npm i**: to install all dependencies.<br>
**npm run start**: build project for development and run webpack-dev-server.<br>
**npm run dev**: build development version of project.<br>
**npm run build**: build production version of project.<br>
**npm run serv**: run simple static server to test project.<br>

**NOTE**: test your changes on static server before upload your files of real server.<br>

# Structure:
`build folder`: contain build files of project, after "npm run start" folder will be not create.<br>
`src folder`: contain all sources of project.<br>
`src/fonts`: contain fonts.<br>
`src/img`: contain images.<br>
`src/sprite`: contain all images that must be generated to the sprite.<br>
`src/js`: folder for js files.<br>
`src/js/components`: place here js files for your project.<br>
`src/js/external`: place here js files of external libs.<br>
`src/scss/base/fonts.scss`: css of fonts.<br>
`src/scss/base/helpers.scss`: mixins, functions and variables.<br>
`src/scss/base/main.scss`: contain main css that belong to all project, container, reset, clearfix and etc.<br>
`src/scss/components`: contain scss components and blocks (header, footer, sidenav and etc).<br>
`src/scss/external`: contain external css libs.<br>
`src/pages`: contain project pages.<br>
`src/pages/[name]`: page folder, contain main files of page.<br>
`src/page/[name]/[name].html`: page html file.<br>
`src/page/[name]/[name].js`: main js file of page, import here existing JS files from src/js/components if you need, write code that needed only for this page.<br>
`src/page/[name]/[name].scss`: main scss file of page, import here existing SCSS files from src/scss/components if you need, write code that needed only for this page.<br>
