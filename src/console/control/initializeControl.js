var getViewport      = require('./getViewport');
var interpretKeydown = require('./chars/interpretKeydown');

function initializeControl(subscribe, render, config) {
  var handleEvent = function (getAction) {
    return function (event) {
      render(getViewport(getAction(event), config));
    };
  }

  subscribe('keydown', handleEvent(interpretKeydown));
}

module.exports = initializeControl;
