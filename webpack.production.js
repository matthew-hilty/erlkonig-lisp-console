const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/initializeErlkonigLispConsole.js',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin({})
    ]
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
