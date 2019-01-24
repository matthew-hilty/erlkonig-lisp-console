var createErlAtom, createErlBoolean, createErlCoreEffectfulFunction, createErlCorePureFunction, createErlIdentifier, createErlIgnore, createErlIndex, createErlKeyword, createErlList, createErlMacro, createErlNil, createErlNumber, createErlSpecialForm, createErlString, createErlSymbol, createErlUserPureFunction, createErlValue, createPredicate, create_hyphen_factory_hyphen__ampersand__hyphen_predicate, erlAtomType, erlAtom_question_, erlBoolean_question_, erlCoreEffectfulFunction_question_, erlCorePureFunction_question_, erlFalse, erlFalse_question_, erlIdentifier_question_, erlIgnore, erlIgnore_question_, erlIndex_question_, erlKeyword_question_, erlList_question_, erlMacro_question_, erlNil, erlNil_question_, erlNumber_question_, erlSpecialForm_question_, erlString_question_, erlSymbol_question_, erlTrue, erlTrue_question_, erlTypes, erlUserPureFunction_question_, extractJsValue, _createErlAtom, _createErlBoolean, _createErlList, _createErlUnit, _erlUnit_question_, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;

createErlList = require('./linked-list').createErlList;

erlAtomType = require('./types').erlAtomType;

erlTypes = require('./types').erlTypes;

create_hyphen_factory_hyphen__ampersand__hyphen_predicate = function(erlType) {
  var factory, predicate;
  factory = function(jsValue) {
    return createErlValue(jsValue, erlType);
  };
  predicate = function(erlValue) {
    return erlValue.type === erlType;
  };
  return [factory, predicate];
};

createErlAtom = function(erlValue) {
  return {
    erlValue: erlValue,
    type: erlAtomType
  };
};

createErlBoolean = function(jsBoolean) {
  if (jsBoolean) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

createErlIgnore = function() {
  return erlIgnore;
};

createErlNil = function() {
  return erlNil;
};

createErlValue = function(jsValue, erlType) {
  return {
    jsValue: jsValue,
    type: erlType
  };
};

createPredicate = function(constant) {
  return function(value) {
    return value === constant;
  };
};

extractJsValue = function(erlValue) {
  return erlValue.jsValue;
};

_ref = erlTypes.map(create_hyphen_factory_hyphen__ampersand__hyphen_predicate), (_ref1 = _ref[0], _createErlBoolean = _ref1[0], erlBoolean_question_ = _ref1[1]), (_ref2 = _ref[1], createErlCoreEffectfulFunction = _ref2[0], erlCoreEffectfulFunction_question_ = _ref2[1]), (_ref3 = _ref[2], createErlCorePureFunction = _ref3[0], erlCorePureFunction_question_ = _ref3[1]), (_ref4 = _ref[3], createErlIdentifier = _ref4[0], erlIdentifier_question_ = _ref4[1]), (_ref5 = _ref[4], createErlIndex = _ref5[0], erlIndex_question_ = _ref5[1]), (_ref6 = _ref[5], createErlKeyword = _ref6[0], erlKeyword_question_ = _ref6[1]), (_ref7 = _ref[6], _createErlList = _ref7[0], erlList_question_ = _ref7[1]), (_ref8 = _ref[7], createErlMacro = _ref8[0], erlMacro_question_ = _ref8[1]), (_ref9 = _ref[8], createErlNumber = _ref9[0], erlNumber_question_ = _ref9[1]), (_ref10 = _ref[9], createErlSpecialForm = _ref10[0], erlSpecialForm_question_ = _ref10[1]), (_ref11 = _ref[10], createErlString = _ref11[0], erlString_question_ = _ref11[1]), (_ref12 = _ref[11], createErlSymbol = _ref12[0], erlSymbol_question_ = _ref12[1]), (_ref13 = _ref[12], _createErlUnit = _ref13[0], _erlUnit_question_ = _ref13[1]), (_ref14 = _ref[13], createErlUserPureFunction = _ref14[0], erlUserPureFunction_question_ = _ref14[1]), (_ref15 = _ref[14], _createErlAtom = _ref15[0], erlAtom_question_ = _ref15[1]);

erlIgnore = _createErlUnit(null);

erlNil = _createErlUnit(null);

_ref16 = [false, true].map(_createErlBoolean), erlFalse = _ref16[0], erlTrue = _ref16[1];

_ref17 = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate), erlFalse_question_ = _ref17[0], erlIgnore_question_ = _ref17[1], erlNil_question_ = _ref17[2], erlTrue_question_ = _ref17[3];

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
