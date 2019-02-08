import { detectCssScrollbar }  from './detectCssScrollbar';
import { getInitialModel }     from './models/getInitialModel';
import { ERLKING }             from './view/recreateConsole';
import { initializeControl }   from './control/initializeControl';
import { initializeView }      from './view/initializeView';
import { render }              from './render';
import { scroll }              from './view/scroll';
import { subscribe }           from './subscribe';

function initialize(config) {
  const root = document.getElementById(config.nodeId);
  const initialModel = getInitialModel();
  const promptLabel = config.promptLabel;
  const labels = { promptLabel: promptLabel };
  const viewModel = ERLKING(labels, initialModel);

  initializeView(root, viewModel);

  const rootChild = root.childNodes[0];

  const controlConfig = {
    getCandidates: config.getCandidates,
    promptLabel: promptLabel,
    transform: config.transform,
    viewport: initialModel
  };

  const cssScrollbarDetected = detectCssScrollbar();

  setScrollbarVisibility(cssScrollbarDetected);

  const _scroll = scroll(cssScrollbarDetected);

  initializeControl(
    subscribe,
    render(viewModel, rootChild, controlConfig, _scroll),
    controlConfig);
}

function setScrollbarVisibility(cssScrollbarDetected) {
  if (!cssScrollbarDetected) {
    const viewport = document.getElementsByClassName('erl-viewport')[0]
    viewport.style.overflow = 'hidden';
  }
}


export { initialize };
