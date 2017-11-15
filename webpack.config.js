'use strict';

const dotenv = require('dotenv');
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
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
      { test: /\.scss$/,   loaders: ["style-loader","css-loader","sass-loader"],
         exclude: /node_modules/ }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
      new ExtractTextPlugin('bundle.css')
    ]
};
