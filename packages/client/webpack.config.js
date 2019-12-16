const path = require('path');


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/build'),
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
