const path = require('path');


const config = {
  entry: './src/Index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};


module.exports = config;
