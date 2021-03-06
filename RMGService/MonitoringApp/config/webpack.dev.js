var webpackMerge = require('webpack-merge');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
     new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    new webpack.ProvidePlugin({ nv: 'nvd3' })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
