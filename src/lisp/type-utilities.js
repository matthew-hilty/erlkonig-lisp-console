var createErlList = require('./linked-list').createErlList;
var erlAtomType   = require('./types').erlAtomType;
var erlTypes      = require('./types').erlTypes;

var createErlAtom = function(erlValue) {
  return {
    erlValue: erlValue,
    type: erlAtomType
  };
};

var createErlBoolean = function(jsBoolean) {
  if (jsBoolean) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

var createErlIgnore = function() {
  return erlIgnore;
};

var createErlNil = function() {
  return erlNil;
};

var createErlValue = function(jsValue, erlType) {
  return {
    jsValue: jsValue,
    type: erlType
  };
};

var createFactoryAndPredicate = function(erlType) {
  var factory = function(jsValue) {
    return createErlValue(jsValue, erlType);
  };
  var predicate = function(erlValue) {
    return erlValue.type === erlType;
  };
  return [factory, predicate];
};

var createPredicate = function(constant) {
  return function(value) {
    return value === constant;
  };
};

var extractJsValue = function(erlValue) {
  return erlValue.jsValue;
};

var _erlTypes = erlTypes.map(createFactoryAndPredicate);

var _createErlBoolean              = _erlTypes[0][0];
var isErlBoolean                   = _erlTypes[0][1];
var createErlCoreEffectfulFunction = _erlTypes[1][0];
var isErlCoreEffectfulFunction     = _erlTypes[1][1];
var createErlCorePureFunction      = _erlTypes[2][0];
var isErlCorePureFunction          = _erlTypes[2][1];
var createErlIdentifier            = _erlTypes[3][0];
var isErlIdentifier                = _erlTypes[3][1];
var createErlIndex                 = _erlTypes[4][0];
var isErlIndex                     = _erlTypes[4][1];
var createErlKeyword               = _erlTypes[5][0];
var isErlKeyword                   = _erlTypes[5][1];
var _createErlList                 = _erlTypes[6][0];
var isErlList                      = _erlTypes[6][1];
var createErlMacro                 = _erlTypes[7][0];
var isErlMacro                     = _erlTypes[7][1];
var createErlNumber                = _erlTypes[8][0];
var isErlNumber                    = _erlTypes[8][1];
var createErlSpecialForm           = _erlTypes[9][0];
var isErlSpecialForm               = _erlTypes[9][1];
var createErlString                = _erlTypes[10][0];
var isErlString                    = _erlTypes[10][1];
var createErlSymbol                = _erlTypes[11][0];
var isErlSymbol                    = _erlTypes[11][1];
var _createErlUnit                 = _erlTypes[12][0];
var _isErlUnit                     = _erlTypes[12][1];
var createErlUserPureFunction      = _erlTypes[13][0];
var isErlUserPureFunction          = _erlTypes[13][1];
var _createErlAtom                 = _erlTypes[14][0];
var isErlAtom                      = _erlTypes[14][1];

var erlIgnore = _createErlUnit(null);

var erlNil = _createErlUnit(null);

var erlBooleans = [false, true].map(_createErlBoolean);

var erlFalse = erlBooleans[0];
var erlTrue  = erlBooleans[1];

var predicates = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate);

var isErlFalse  = predicates[0];
var isErlIgnore = predicates[1];
var isErlNil    = predicates[2];
var isErlTrue   = predicates[3];

module.exports = {
  createErlAtom: createErlAtom,
  createErlBoolean: createErlBoolean,
  createErlCoreEffectfulFunction: createErlCoreEffectfulFunction,
  createErlCorePureFunction: createErlCorePureFunction,
  createErlIdentifier: createErlIdentifier,
  createErlIgnore: createErlIgnore,
  createErlIndex: createErlIndex,
  createErlKeyword: createErlKeyword,
  createErlList: createErlList,
  createErlMacro: createErlMacro,
  createErlNil: createErlNil,
  createErlNumber: createErlNumber,
  createErlSpecialForm: createErlSpecialForm,
  createErlString: createErlString,
  createErlSymbol: createErlSymbol,
  createErlUserPureFunction: createErlUserPureFunction,
  extractJsValue: extractJsValue,
  isErlAtom: isErlAtom,
  isErlBoolean: isErlBoolean,
  isErlCoreEffectfulFunction: isErlCoreEffectfulFunction,
  isErlCorePureFunction: isErlCorePureFunction,
  erlFalse: erlFalse,
  isErlFalse: isErlFalse,
  isErlIdentifier: isErlIdentifier,
  erlIgnore: erlIgnore,
  isErlIgnore: isErlIgnore,
  isErlIndex: isErlIndex,
  isErlKeyword: isErlKeyword,
  isErlList: isErlList,
  isErlMacro: isErlMacro,
  erlNil: erlNil,
  isErlNil: isErlNil,
  isErlNumber: isErlNumber,
  isErlSpecialForm: isErlSpecialForm,
  isErlString: isErlString,
  isErlSymbol: isErlSymbol,
  erlTrue: erlTrue,
  isErlTrue: isErlTrue,
  isErlUserPureFunction: isErlUserPureFunction
};
