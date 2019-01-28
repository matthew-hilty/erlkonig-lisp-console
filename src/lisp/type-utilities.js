var createErlList = require('./linked-list').createErlList;
var erlAtomType   = require('./types').erlAtomType;
var erlTypes      = require('./types').erlTypes;

var create_hyphen_factory_hyphen__ampersand__hyphen_predicate = function(erlType) {
  var factory = function(jsValue) {
    return createErlValue(jsValue, erlType);
  };
  var predicate = function(erlValue) {
    return erlValue.type === erlType;
  };
  return [factory, predicate];
};

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

var createPredicate = function(constant) {
  return function(value) {
    return value === constant;
  };
};

var extractJsValue = function(erlValue) {
  return erlValue.jsValue;
};

var _erlTypes = erlTypes.map(
  create_hyphen_factory_hyphen__ampersand__hyphen_predicate);

var _createErlBoolean                  = _erlTypes[0][0];
var erlBoolean_question_               = _erlTypes[0][1];
var createErlCoreEffectfulFunction     = _erlTypes[1][0];
var erlCoreEffectfulFunction_question_ = _erlTypes[1][1];
var createErlCorePureFunction          = _erlTypes[2][0];
var erlCorePureFunction_question_      = _erlTypes[2][1];
var createErlIdentifier                = _erlTypes[3][0];
var erlIdentifier_question_            = _erlTypes[3][1];
var createErlIndex                     = _erlTypes[4][0];
var erlIndex_question_                 = _erlTypes[4][1];
var createErlKeyword                   = _erlTypes[5][0];
var erlKeyword_question_               = _erlTypes[5][1];
var _createErlList                     = _erlTypes[6][0];
var erlList_question_                  = _erlTypes[6][1];
var createErlMacro                     = _erlTypes[7][0];
var erlMacro_question_                 = _erlTypes[7][1];
var createErlNumber                    = _erlTypes[8][0];
var erlNumber_question_                = _erlTypes[8][1];
var createErlSpecialForm               = _erlTypes[9][0];
var erlSpecialForm_question_           = _erlTypes[9][1];
var createErlString                    = _erlTypes[10][0];
var erlString_question_                = _erlTypes[10][1];
var createErlSymbol                    = _erlTypes[11][0];
var erlSymbol_question_                = _erlTypes[11][1];
var _createErlUnit                     = _erlTypes[12][0];
var _erlUnit_question_                 = _erlTypes[12][1];
var createErlUserPureFunction          = _erlTypes[13][0];
var erlUserPureFunction_question_      = _erlTypes[13][1];
var _createErlAtom                     = _erlTypes[14][0];
var erlAtom_question_                  = _erlTypes[14][1];

var erlIgnore = _createErlUnit(null);

var erlNil = _createErlUnit(null);

var erlBooleans = [false, true].map(_createErlBoolean);

var erlFalse = erlBooleans[0];
var erlTrue  = erlBooleans[1];

var predicates = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate);

var erlFalse_question_  = predicates[0];
var erlIgnore_question_ = predicates[1];
var erlNil_question_    = predicates[2];
var erlTrue_question_   = predicates[3];

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
  erlAtom_question_: erlAtom_question_,
  erlBoolean_question_: erlBoolean_question_,
  erlCoreEffectfulFunction_question_: erlCoreEffectfulFunction_question_,
  erlCorePureFunction_question_: erlCorePureFunction_question_,
  erlFalse: erlFalse,
  erlFalse_question_: erlFalse_question_,
  erlIdentifier_question_: erlIdentifier_question_,
  erlIgnore: erlIgnore,
  erlIgnore_question_: erlIgnore_question_,
  erlIndex_question_: erlIndex_question_,
  erlKeyword_question_: erlKeyword_question_,
  erlList_question_: erlList_question_,
  erlMacro_question_: erlMacro_question_,
  erlNil: erlNil,
  erlNil_question_: erlNil_question_,
  erlNumber_question_: erlNumber_question_,
  erlSpecialForm_question_: erlSpecialForm_question_,
  erlString_question_: erlString_question_,
  erlSymbol_question_: erlSymbol_question_,
  erlTrue: erlTrue,
  erlTrue_question_: erlTrue_question_,
  erlUserPureFunction_question_: erlUserPureFunction_question_
};
