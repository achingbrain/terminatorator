'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    main: './src/terminal.js',
    debug: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    library: 'terminatorator'
  },
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'none' : 'cheap-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: [
        'debug'
      ]
      // inject: 'head'
    }),
    isProduction ? new MiniCssExtractPlugin() : null
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              strictMath: true,
              noIeCompat: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development'
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 43829,
    index: 'index.html',
    open: true
  }
}
