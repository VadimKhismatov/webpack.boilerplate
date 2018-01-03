const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const dev = require("./webpack/dev.config");
const prod = require("./webpack/prod.config");
const SpritesmithPlugin = require("webpack-spritesmith");

const paths = {
    src: path.join(__dirname + "/src"),
    build: path.join(__dirname + "/build")
};

const common = merge([
    {
        devtool: "source-map",
        entry: {
            'index': paths.src + '/pages/index/index.js'
        },
        output: {
            path: paths.build,
            filename: 'js/[name].js'
        },
        resolve: {
            //webpack 2:
            modules: ["node_modules", path.resolve(paths.src + "/img/sprite.png")]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: paths.src + '/pages/index/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(paths.src + "/sprite"),
                    glob: '*.png'
                },
                target: {
                    image: path.resolve(paths.src + "/img/sprite.png"),
                    css: path.resolve(__dirname, 'src/scss/base/sprite.scss')
                },
                /* customTemplates: {
                    'scss.template.mustache': './scss.template.mustache'
                }, */
                apiOptions: {
                    cssImageRef: "../../img/sprite.png"
                }
            })
        ]
    }
]);



module.exports = function (env) {
    if (env === "production") {
        return merge([
            common,
            prod()
        ]);
    }
    if (env === "development") {
        return merge([
            common,
            dev()
        ]);

    }
};