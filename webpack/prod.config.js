const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: "../",
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    minimize: true
                                }
                            },
                            {
                                loader: "postcss-loader"
                            },
                            {
                                loader: "sass-loader"
                            }
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    minimize: true
                                }
                            },
                            {
                                loader: "postcss-loader"
                            }
                        ],
                    }),
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        query: {
                            presets: ["env"],
                            plugins: ["transform-runtime"]
                        }
                    }
                },
                {
                    test: /\.(eot|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    },
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: 'img/[name].[ext]'
                            }
                        },
                        {
                            loader: "image-webpack-loader",
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            }
                        }
                    ]

                },
            ]
        },
        plugins: [
            new ExtractTextPlugin("./css/[name].css"),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false,
                }
            })
        ]
    }
};