'use strict';

const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const IconfontWebpackPlugin = require('iconfont-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});



dotenv.load();

module.exports = {
  entry: './client/entry.jsx',
  output: {
     path: path.join(__dirname, 'public'),
    filename: 'index_bundle.js',
    publicPath: '/public',
    sourceMapFilename: 'sourceMap.map'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.png$/, loader: ['url-loader'], exclude:/node_modules/},
      { test: /\.(css|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.scss$/, loaders: ["style-loader","css-loader","sass-loader"],exclude: /node_modules/ },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('bundle.css'),

  ]
};
