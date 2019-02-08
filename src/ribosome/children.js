function childById(id) {
  return { mode: 'id', key: id }; 
}

function childByIndex(index) {
  return { mode: 'index', key: index }; 
}

function identifyChild(mode) {
  return function(specifier, index) {
    const _index = index == undefined ? 0 : index;
    const child = { mode: mode, key: { index: _index }};
    child.key[mode] = specifier;
    return child;
  };
}

function identifyChildren(mode) {
  return function(specifier) {
    const child = { mode: mode, key: {}};
    child.key[mode] = specifier;
    return child;
  };
}

export {
  childById: childById,
  childByIndex: childByIndex,
  childByClass: identifyChild('class'),
  childByQuery: identifyChild('query'),
  childByTag: identifyChild('tag'),
  childrenByClass: identifyChildren('class'),
  childrenByQuery: identifyChildren('query'),
  childrenByTag: identifyChildren('tag')
};
