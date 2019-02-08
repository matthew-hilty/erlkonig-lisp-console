function diffArray(value1, value0, index) {
  if (!Array.isArray(value0)) {
    return { tree: index, commands: [['replace', value1]], index: index + 1 };
  }

  let count = 0;
  const length1 = value1.length;
  const length0 = value0.length;
  const minLength = Math.min(length1, length0);

  if (minLength > 1) {
    for (let j = 0; j < minLength; j++) {
      if (value1[j] !== value0[j]) {
        count++;
      }
    }

    if (count === minLength) {
      return { tree: index, commands: [['replace', value1]], index: index + 1 };
    }
  }

  const tree = [];
  let commands = [];

  for (let i = 0; i < minLength; i++) {
    if (value1[i] !== value0[i]) {
      const _patch = _diff(value1[i], value0[i], index);
      if (_patch.commands.length > 0) {
        tree.push({ index: i, value: _patch.tree });
        commands = commands.concat(_patch.commands);
        index = index + _patch.commands.length;
      }
    }
  }

  for (let i = 0; i < length1; i++) {
    tree.push({ index: i, value: index });
    commands.push(['insertAtEnd', value1[i]]);
    index++;
  }

  const removals = [];

  for (let i = 0; i < length0; i++) {
    removals.unshift({ index: i, value: index });
    commands.push(['remove']);
    index++;
  }

  return { tree: tree.concat(removals), commands: commands, index: index };
}

function diffObject(value1, value0, index) {
  if (!isObject(value0)) {
    return {
      tree: index,
      commands: [['replace', value1]],
      index: index + 1
    };
  }

  let keyCount = 0;
  let diffCount = 0;

  for (let key in value0) {
    if (!value0.hasOwnProperty(key)) continue;
    keyCount++;
    if (!value1.hasOwnProperty(key) || value1[key] !== value0[key]) {
      diffCount++;
    }
  }

  if (keyCount > 1 && keyCount === diffCount) {
    return { tree: index, commands: [['replace', value1]], index: index + 1 };
  }

  const tree = [];
  let commands = [];

  for (let key in value1) {
    if (!value1.hasOwnProperty(key)) continue;
    if (value0.hasOwnProperty(key)) {
      if (value1[key] !== value0[key]) {
        const _patch = _diff(value1[key], value0[key], index);
        if (_patch.commands.length > 0) {
          tree.push({ index: key, value: _patch.tree });
          commands = commands.concat(_patch.commands);
          index = index + _patch.commands.length;
        }
      }
    } else {
      tree.push({ index: key, value: index });
      commands.push(['setAtKey', value1[key]]);
      index++;
    }
  }

  for (let key in value0) {
    if (!value1.hasOwnProperty(key)) {
      tree.push({ index: key, value: index });
      commands.push(['delete']);
      index++;
    }
  }

  return { tree: tree, commands: commands, index: index };
}

function _diff(value1, value0, index) {
  if (value1 === value0) {
    return { tree: [], commands: [], index: index };
  }

  if (Array.isArray(value1)) {
    return diffArray(value1, value0, index);
  }

  if (isObject(value1)) {
    return diffObject(value1, value0, index);
  }

  return { tree: index, commands: [['replace', value1]], index: index + 1 };
}

const diff = function(value1, value0) {
  const patch = _diff(value1, value0, 0);
  return { value: patch.tree, commands: patch.commands };
};

function isObject(value) {
  return {}.toString.call(value) === '[object Object]';
}

export { diff };
