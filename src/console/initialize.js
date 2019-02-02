import { detectCssScrollbar }  from './detectCssScrollbar';
import { getInitialModel }     from './models/getInitialModel';
import { ERLKING }             from './view/recreateConsole';
import { initializeControl }   from './control/initializeControl';
import { initializeView }      from './view/initializeView';
import { render }              from './render';
import { scroll }              from './view/scroll';
import { subscribe }           from './subscribe';

function initialize(config) {
  var root = document.getElementById(config.nodeId);
  var initialModel = getInitialModel();
  var promptLabel = config.promptLabel;
  var labels = { promptLabel: promptLabel };
  var viewModel = ERLKING(labels, initialModel);

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


export { initialize };
