To add img tag to html use:
<!-- <img src=<%=require("../../img/")%> alt=""> -->
url have to point to the image placed in SRC folder

some link to external libs: 

SLICK CAROUSEL: 
css: "node_modules/slick-carousel/slick/slick.scss"
css-theme: "node_modules/slick-carousel/slick/slick-theme.scss"
js: "node_modules/slick-carousel/slick/slick.js"
js-min: "node_modules/slick-carousel/slick/slick.min.js"


NPM Commands:
npm i: to install all dependencies.
npm run start: build project for development and run webpack-dev-server.
npm run dev: build development version of project.
npm run build: build production version of project.
npm run serv: run simple static server to test project.

NOTE: test your changes on static server before upload your files of real server.

Structure:

build folder: contain build files of project, after "npm run start" folder will be not create.

src folder: contain all sources all project.

src/fonts: contain fonts.

src/img: contain images

src/sprite: contain all images that must be generated to the sprite.

src/js: folder for js files.

src/js/components: place here js files for your project.

src/js/external: place here js files of external libs.

src/scss/base/fonts.scss: css of fonts.

src/scss/base/helpers.scss: mixins, functions and variables.

src/scss/base/main.scss: contain main css that belong to all project, container, reset, clearfix and etc.

src/scss/components: contain scss components and blocks (header, footer, sidenav and etc).

src/scss/external: contain external css libs.

src/pages: contain project pages.

src/pages/[name]: page folder, contain main files of page.

src/page/[name]/[name].html: page html file.

src/page/[name]/[name].js: main js file of page, import here existing JS files from src/js/components if you need, write code that needed only for this page.

src/page/[name]/[name].scss: main scss file of page, import here existing SCSS files from src/scss/components if you need, write code that needed only for this page.