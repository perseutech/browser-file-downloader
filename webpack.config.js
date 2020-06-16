const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: process.env.MODE || 'development',
  entry: './src/index.ts',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [
      {
        test: /.(ts|tsx)?$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },

  devServer: {
    open: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}