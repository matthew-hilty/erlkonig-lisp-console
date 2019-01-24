var createAndAttachElement =
  require('../../ribosome/interpreter').createAndAttachElement;

function initializeView(root, viewModel) {
  createAndAttachElement(root, viewModel);
}

module.exports = initializeView;
