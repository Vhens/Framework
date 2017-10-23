const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css",
});
module.exports = {
    entry: {
       app: ['./src/index.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
        publicPath: "/"
    },
    // devServer: {
    //     historyApiFallback: true, //不跳转
    //     inline: true, //实时刷新
    //     hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
    //     port: 8085
    // },
    resolve:{
        extensions:['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader',
                ]
            },
            {
                 test: /\.css$/,
                 exclude: /node_modules/,
                 use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                             loader: 'css-loader',
                             options: {
                                 modules: true,
                                 importLoaders: 1
                             }
                         }
                    ]
                 })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                  use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                  // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({template: './index.html'}),
        extractSass,
        new ExtractTextPlugin('css/[name].css'),
        // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8088'
        }),
    ]
}
