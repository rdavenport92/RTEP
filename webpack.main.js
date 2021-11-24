const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  target: 'electron-main',
  entry: './main/main.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: [path.resolve(__dirname, 'dist')]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};
