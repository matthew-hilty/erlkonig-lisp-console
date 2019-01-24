var detectCssScrollbar  = require('./detectCssScrollbar');
var getInitialModel     = require('./models/getInitialModel');
var getInitialViewModel = require('./view/recreateConsole');
var initializeControl   = require('./control/initializeControl');
var initializeView      = require('./view/initializeView');
var render              = require('./render');
var scroll              = require('./view/scroll');
var subscribe           = require('./subscribe');

function initialize(config) {
  var root = document.getElementById(config.nodeId);
  var initialModel = getInitialModel();
  var promptLabel = config.promptLabel;
  var labels = { promptLabel: promptLabel };
  var viewModel = getInitialViewModel(labels, initialModel);

  initializeView(root, viewModel);

  var rootChild = root.childNodes[0];

  var controlConfig = {
    getCandidates: config.getCandidates,
    promptLabel: promptLabel,
    transform: config.transform,
    viewport: initialModel
  };

  var cssScrollbarDetected = detectCssScrollbar();

  setScrollbarVisibility(cssScrollbarDetected);

  var _scroll = scroll(cssScrollbarDetected);

  initializeControl(
    subscribe,
    render(viewModel, rootChild, controlConfig, _scroll),
    controlConfig);
}

function setScrollbarVisibility(cssScrollbarDetected) {
  if (!cssScrollbarDetected) {
    var viewport = document.getElementsByClassName('erl-viewport')[0]
    viewport.style.overflow = 'hidden';
  }
}


module.exports = initialize;
