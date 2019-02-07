const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/initializeErlkonigLispConsole.js',
  devtool: 'inline-source-map',
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
