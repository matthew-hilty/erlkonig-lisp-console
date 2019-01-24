var diff          = require('../ribosome/diff');
var getViewModel  = require('./view/recreateConsole');
var modifyElement = require('../ribosome/interpreter').modifyElement;

function render(_viewModel, rootChild, controlConfig, scroll) {
  var viewModel = _viewModel;
  return function (model) {
    var labels = { promptLabel: controlConfig.promptLabel };
    var newViewModel = getViewModel(labels, model);
    modifyElement(rootChild, diff(newViewModel, viewModel));

    controlConfig.viewport = model;
    viewModel = newViewModel;

    scroll();
  };
}

module.exports = render;
