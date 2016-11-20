'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      //'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
      extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0", "react"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style','css!sass')
    },
    { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=src/fonts/[name].[ext]' },
    { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=src/fonts/[name].[ext]' },
    { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=src/fonts/[name].[ext]' },
    { test: /\.otf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=src/fonts/[name].[ext]' },
    { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=src/fonts/[name].[ext]' }
    ]
  }
};
