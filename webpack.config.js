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
  // Heroku
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index_bundle.js',
    publicPath: '/',
    sourceMapFilename: 'sourceMap.map'
  },
  // // Local
  // output: {
  //   path: path.resolve('public'),
  //   filename: 'index_bundle.js',
  //     // publicPath: '/',
  //   sourceMapFilename: 'sourceMap.map'
  // },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  module: {
    loaders: [

      { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(css|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.scss$/, loaders: ["style-loader","css-loader","sass-loader"],exclude: /node_modules/ },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('bundle.css'),

  ]
};
