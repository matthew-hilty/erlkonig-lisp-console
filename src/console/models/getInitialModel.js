var createFrame    = require('./types/createFrame');
var createPrompt   = require('./types/createPrompt');
var createTerminal = require('./types/createTerminal');
var createViewport = require('./types/createViewport');

function getInitialModel() {
  return createViewport(
    createTerminal([], [], createPrompt('', '')),
    createFrame(0, 0, 0));
}

module.exports = getInitialModel;
