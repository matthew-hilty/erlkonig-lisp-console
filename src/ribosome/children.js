function childById(id) {
  return { mode: 'id', key: id }; 
}

function childByIndex(index) {
  return { mode: 'index', key: index }; 
}

function identifyChild(mode) {
  return function(specifier, index) {
    index = index == undefined ? 0 : index;
    var child = { mode: mode, key: { index: index }};
    child.key[mode] = specifier;
    return child;
  };
}

function identifyChildren(mode) {
  return function(specifier) {
    var child = { mode: mode, key: {}};
    child.key[mode] = specifier;
    return child;
  };
}

module.exports = {
  childById: childById,
  childByIndex: childByIndex,
  childByClass: identifyChild('class'),
  childByQuery: identifyChild('query'),
  childByTag: identifyChild('tag'),
  childrenByClass: identifyChildren('class'),
  childrenByQuery: identifyChildren('query'),
  childrenByTag: identifyChildren('tag')
};
