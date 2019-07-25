const path = require('path');


const config = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};


module.exports = config;
