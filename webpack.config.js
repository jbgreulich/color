const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    filename: 'color.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'color',
    libraryTarget:'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
