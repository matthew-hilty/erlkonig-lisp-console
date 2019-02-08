import { createErlList } from './linked-list';
import { erlAtomType } from './types';
import { erlTypes } from './types';

const createErlAtom = function(erlValue) {
  return {
    erlValue: erlValue,
    type: erlAtomType
  };
};

const createErlBoolean = function(jsBoolean) {
  if (jsBoolean) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

const createErlIgnore = function() {
  return erlIgnore;
};

const createErlNil = function() {
  return erlNil;
};

const createErlValue = function(jsValue, erlType) {
  return {
    jsValue: jsValue,
    type: erlType
  };
};

const createFactoryAndPredicate = function(erlType) {
  const factory = function(jsValue) {
    return createErlValue(jsValue, erlType);
  };
  const predicate = function(erlValue) {
    return erlValue.type === erlType;
  };
  return [factory, predicate];
};

const createPredicate = function(constant) {
  return function(value) {
    return value === constant;
  };
};

const extractJsValue = function(erlValue) {
  return erlValue.jsValue;
};

const _erlTypes = erlTypes.map(createFactoryAndPredicate);

const _createErlBoolean              = _erlTypes[0][0];
const isErlBoolean                   = _erlTypes[0][1];
const createErlCoreEffectfulFunction = _erlTypes[1][0];
const isErlCoreEffectfulFunction     = _erlTypes[1][1];
const createErlCorePureFunction      = _erlTypes[2][0];
const isErlCorePureFunction          = _erlTypes[2][1];
const createErlIdentifier            = _erlTypes[3][0];
const isErlIdentifier                = _erlTypes[3][1];
const createErlIndex                 = _erlTypes[4][0];
const isErlIndex                     = _erlTypes[4][1];
const createErlKeyword               = _erlTypes[5][0];
const isErlKeyword                   = _erlTypes[5][1];
const _createErlList                 = _erlTypes[6][0];
const isErlList                      = _erlTypes[6][1];
const createErlMacro                 = _erlTypes[7][0];
const isErlMacro                     = _erlTypes[7][1];
const createErlNumber                = _erlTypes[8][0];
const isErlNumber                    = _erlTypes[8][1];
const createErlSpecialForm           = _erlTypes[9][0];
const isErlSpecialForm               = _erlTypes[9][1];
const createErlString                = _erlTypes[10][0];
const isErlString                    = _erlTypes[10][1];
const createErlSymbol                = _erlTypes[11][0];
const isErlSymbol                    = _erlTypes[11][1];
const _createErlUnit                 = _erlTypes[12][0];
const _isErlUnit                     = _erlTypes[12][1];
const createErlUserPureFunction      = _erlTypes[13][0];
const isErlUserPureFunction          = _erlTypes[13][1];
const _createErlAtom                 = _erlTypes[14][0];
const isErlAtom                      = _erlTypes[14][1];

const erlIgnore = _createErlUnit(null);

const erlNil = _createErlUnit(null);

const erlBooleans = [false, true].map(_createErlBoolean);

const erlFalse = erlBooleans[0];
const erlTrue  = erlBooleans[1];

const predicates = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate);

const isErlFalse  = predicates[0];
const isErlIgnore = predicates[1];
const isErlNil    = predicates[2];
const isErlTrue   = predicates[3];

export {
  createErlAtom,
  createErlBoolean,
  createErlCoreEffectfulFunction,
  createErlCorePureFunction,
  createErlIdentifier,
  createErlIgnore,
  createErlIndex,
  createErlKeyword,
  createErlList,
  createErlMacro,
  createErlNil,
  createErlNumber,
  createErlSpecialForm,
  createErlString,
  createErlSymbol,
  createErlUserPureFunction,
  extractJsValue,
  isErlAtom,
  isErlBoolean,
  isErlCoreEffectfulFunction,
  isErlCorePureFunction,
  erlFalse,
  isErlFalse,
  isErlIdentifier,
  erlIgnore,
  isErlIgnore,
  isErlIndex,
  isErlKeyword,
  isErlList,
  isErlMacro,
  erlNil,
  isErlNil,
  isErlNumber,
  isErlSpecialForm,
  isErlString,
  isErlSymbol,
  erlTrue,
  isErlTrue,
  isErlUserPureFunction
};
