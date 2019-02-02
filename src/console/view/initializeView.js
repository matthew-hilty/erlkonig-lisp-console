import { createAndAttachElement } from '../../ribosome/interpreter';

function initializeView(root, viewModel) {
  createAndAttachElement(root, viewModel);
}

export { initializeView };
