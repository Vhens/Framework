'use strict'
const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');
const config = require('../config');
const tsImportPluginFactory = require('ts-import-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.tsx',
    babel: ['babel-polyfill'],
    // 将 第三方依赖 单独打包
    vendor: [
      'react',
      'react-dom',
      'react-hot-loader',
      'es6-promise',
      'whatwg-fetch'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.scss'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(ts|tsx)$/,
        include: [resolve('src')],
        rules: [
          {
            loader: 'react-hot-loader/webpack',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              // getCustomTransformers: () => ({
              //   before: [tsImportPluginFactory({
              //     libraryName: 'antd',
              //     style: true,
              //     libraryDirectory: 'lib'
              //   })]
              // })
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    // 作用域提升，减少代码量，加快代码运行速度（webpack 3.0）
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
