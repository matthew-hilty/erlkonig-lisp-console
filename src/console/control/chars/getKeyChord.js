import { keyCodeCharts } from './keyCodeCharts';
import { keyIdentifierCharts } from './keyIdentifierCharts';

function getEventProxy(kind, event) {
  return {
    value: event[kind],
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey
  };
};

function identity(event) {
  return event;
}

function getKeyChord(event) {
  var normalize;
  var property;

  if (event.key != null) {
    property = 'key';
    normalize = identity;
  } else if (event.keyIdentifier != null) {
    property = 'keyIdentifier';
    normalize = _getKeyChord(keyIdentifierCharts);
  } else {
    property = 'keyCode';
    normalize = _getKeyChord(keyCodeCharts);
  }

  return normalize(getEventProxy(property, event));
}

function _getKeyChord(conversionCharts) {
  return function (event) {
    return {
      value: getKeyChordValue(conversionCharts, event.value, event.shiftKey),
      altKey: event.altKey,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey
    };
  };
}

function getKeyChordValue(conversionCharts, value, shiftKey) {
  var key = shiftKey ? 'withShift' : 'withoutShift';
  return conversionCharts[key][value];
}

export { getKeyChord };
