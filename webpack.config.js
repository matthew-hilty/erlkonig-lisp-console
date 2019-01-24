module.exports = {
  entry: './src/initializeErlkingLispConsole.js',
  output: {
    path: 'public',
    filename: 'erlking.js'
  },
  node: {
    fs: "empty"
  }
};
