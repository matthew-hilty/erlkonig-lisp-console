const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/initializeErlkonigLispConsole.js',
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  output: {
    path: path.resolve(__dirname,  'public'),
    filename: 'erlkonig.js'
  },
  module : {
    rules: [
      { test: /\.lisp$/, use: 'raw-loader' }
    ]
  }
};
