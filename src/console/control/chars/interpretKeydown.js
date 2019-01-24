var getAction   = require('./getAction');
var getKeyChord = require('./getKeyChord');

function interpretKeydown(event) {
  return getAction(getKeyChord(event));
}

module.exports = interpretKeydown;
