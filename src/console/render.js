import { diff } from '../ribosome/diff';
import { ERLKING } from './view/recreateConsole';
import { modifyElement } from '../ribosome/interpreter';

function render(_viewModel, rootChild, controlConfig, scroll) {
  var viewModel = _viewModel;
  return function (model) {
    var labels = { promptLabel: controlConfig.promptLabel };
    var newViewModel = ERLKING(labels, model);
    modifyElement(rootChild, diff(newViewModel, viewModel));

    controlConfig.viewport = model;
    viewModel = newViewModel;

    scroll();
  };
}

export { render };
