/* eslint-disable */

const path = require('path')

const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_DOCS = path.resolve(__dirname, 'docs')
const DIR_PUBLIC = path.resolve(__dirname, 'public')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(DIR_SRC, 'index_dev.tsx'),

  output: {
    clean: true,
    path: DIR_DOCS,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: [DIR_NODE_MODULES, DIR_SRC],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(DIR_SRC, 'index_dev.html'),
      filename: 'index.html'
    }),
  ],

  devtool: 'eval-source-map',

  devServer: {
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    port: 8080,
    static: {
      directory: DIR_PUBLIC,
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: DIR_SRC,
        exclude: DIR_NODE_MODULES,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.webpack.json'
            }
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
}
