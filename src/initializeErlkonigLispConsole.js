import { initialize } from './console/initialize';
import { interpret }  from './lisp/interpret';
import { keyTokens }  from './lisp/keyTokens';
import introduction   from './introduction.lisp';

const _keyTokens =  keyTokens.map(function (keyToken) {
  return ':' + keyToken;
});

const promptLabel = 'Lisp> ';

function getCandidates(prefix) {
  const envKeys = interpret("(keys (-get-current-env-))")[0]
      .value
      .slice(1, -1)
      .split(' ');
  return getMatches(prefix, _keyTokens.concat(envKeys));
}

function getMatches(prefix, words) {
  if (!/^[-a-zA-Z0-9]+$/.test(prefix)) {
    return [];
  }
  const regex = RegExp('(^|\W):' + prefix);
  const matches = [];
  for (let index in words) {
    const word = words[index];
    if (regex.test(word)) {
      matches.push(word.slice(1));
    }
  }
  return matches;
}

interpret(introduction);

initialize({
  getCandidates: getCandidates,
  initialModelData: '(help) ; Press enter for help.',
  nodeId: 'viewport',
  promptLabel: promptLabel,
  transform: interpret,
});
