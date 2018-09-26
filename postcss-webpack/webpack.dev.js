const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const express = require('express')

const postCSSConfig = require('./postcss.config')

const extractCSS = new ExtractTextPlugin('[name]-css.css');
const extractSCSS = new ExtractTextPlugin('[name]-scss.css');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    inline: true,
    before: function(app) {
      app.use('/public', express.static(path.join(__dirname, 'public')))
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: false,
                importLoaders: 1,
                sourceMap: true,
                localIdentName: '[name]-[local]-[hash:base64:5]'
                // url: false // Use this option if you don't want webpack to resolve URL paths
              }
            },
            {
              loader: 'postcss-loader', 
              options: {
                sourceMap: true,
              }
            },
            {loader: 'sass-loader', options: {sourceMap: true}},
            {loader: 'import-glob-loader'}
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: false,
                importLoaders: 1,
                sourceMap: true,
                localIdentName: '[name]-[local]-[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                minimize: false,
                plugins: postCSSConfig.plugins
              },
            }
          ]
        }),
      }
    ]
  },
  plugins: [
    // https://github.com/webpack-contrib/extract-text-webpack-plugin
    extractCSS,
    extractSCSS,
    // https://www.npmjs.com/package/webpack-notifier
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    // https://github.com/gajus/write-file-webpack-plugin
    new WriteFilePlugin({
      useHashIndex: true
    }),
    new CopyWebpackPlugin([{
      from: 'public/humans.txt'
    },{
      from: 'public/robots.txt'
    },{
      from: 'public/favicon.ico'
    },{
      from: 'public/**/*',
      to: './'
    }]),
    // https://github.com/Va1/browser-sync-webpack-plugin
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      },
      {
        reload: true
      }
    )
  ]
});
