const _nodeId     = '#erl-css-scrollbar-test-div';
const _prefixes   = ['-webkit-', '-moz-', '-o-', '-ms-'];
const _pseudo     = '::';
const _scrollbar  = 'scrollbar';
const _width10px  = '{width:10px;}';

function createRule(prefix) {
  return _nodeId + _pseudo + prefix + _scrollbar + _width10px;
}

function _detectCssScrollbar(styleRule) {
  const body = getBody();
  const docElement = document.documentElement;
  const div = document.createElement('div');
  const node = document.createElement('div');
  node.id = 'erl-css-scrollbar-test-div';
  div.appendChild(node);
  const style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'erl-css-scrollbar-test-style';
  const nonceNode = document.getElementById('scrollbar-nonce');
  const nonce = nonceNode.dataset['scrollbarNonce'];
  style.setAttribute('nonce', nonce);

  (body.fake ? body : div).appendChild(style);

  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = styleRule;
  } else {
    style.appendChild(document.createTextNode(styleRule));
  }

  div.id = 'erl-css-scroll-test';

  if (body.fake) {
    body.style.background = '';
    body.style.overflow = 'hidden';
    const docOverflow = docElement.style.overflow;
    docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  const result = hasCssScrollbar(node, 30);

  if (body.fake) {
    body.parentNode.removeChild(body);
    docElement.style.overflow = docOverflow;
    docElement.offsetHeight;
  } else {
    div.parentNode.removeChild(div);
  }

  return result;
}

function detectCssScrollbar() {
  const cssScrollbar =
    _nodeId + '{overflow:scroll;width:40px;height:40px;}' +
    _prefixes.map(createRule).join('') +
    createRule('');

  return _detectCssScrollbar(cssScrollbar);
}

function getBody() {
  let _body = document.body;

  if (!_body) {
    const isSvg = document.documentElement.nodeName.toLowerCase() === 'svg';
    _body = document.createElement(isSvg ? 'svg' : 'body');
    _body.fake = true;
  }

  return _body;
}

function hasCssScrollbar(node, expectedWidth) {
  return 'scrollWidth' in node && node.scrollWidth === expectedWidth;
}

export { detectCssScrollbar };
