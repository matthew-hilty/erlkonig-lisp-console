function createElement(tag) {
  return function (config) {
    var element = { tag: tag };

    if (config != null) { // isObject

      for (var key in config) {
        if (key === 'id') {
          element.id = config.id;
        }

        if (key === 'classes') {
          element.classes = config.classes;
        }

        if (key === 'style') {
          element.style = config.style;
        }

        if (key === 'attribs') {
          element.attribs = config.attribs;
        }
      }
    }

    if (arguments.length > 1) {
      var args = [].slice.call(arguments, 1);

      if (args.length === 1 && isString(args[0])) {
        element.children = args[0];
      } else {
        element.children = [].concat.apply([], args);
      }
    }

    return element;
  };
}

function isString(value) {
  return {}.toString.call(value) === '[object String]';
}

var tags = {
  'A': true,
  'BUTTON': true,
  'CANVAS': true,
  'CODE': true,
  'DIV': true,
  'FOOTER': true,
  'FORM': true,
  'H1': true,
  'H2': true,
  'H3': true,
  'H4': true,
  'H5': true,
  'H6': true,
  'HEADER': true,
  'IMG': true,
  'LABEL': true,
  'LI': true,
  'LINK': true,
  'NAV': true,
  'NOSCRIPT': true,
  'OPTGROUP': true,
  'OPTION': true,
  'OUTPUT': true,
  'P': true,
  'PARAM': true,
  'PRE': true,
  'SCRIPT': true,
  'SECTION': true,
  'SELECT': true,
  'SOURCE': true,
  'SPAN': true,
  'STYLE': true,
  'TEXTAREA': true
};

var elementFactories = {};

for (var tagName in tags) {
  elementFactories[tagName] = createElement(tagName);
}

export const A = elementFactories.A;
export const BUTTON = elementFactories.BUTTON;
export const CANVAS = elementFactories.CANVAS;
export const CODE = elementFactories.CODE;
export const DIV = elementFactories.DIV;
export const FOOTER = elementFactories.FOOTER;
export const FORM = elementFactories.FORM;
export const H1 = elementFactories.H1;
export const H2 = elementFactories.H2;
export const H3 = elementFactories.H3;
export const H4 = elementFactories.H4;
export const H5 = elementFactories.H5;
export const H6 = elementFactories.H6;
export const HEADER = elementFactories.HEADER;
export const IMG = elementFactories.IMG;
export const LABEL = elementFactories.LABEL;
export const LI = elementFactories.LI;
export const LINK = elementFactories.LINK;
export const NAV = elementFactories.NAV;
export const NOSCRIPT = elementFactories.NOSCRIPT;
export const OPTGROUP = elementFactories.OPTGROUP;
export const OPTION = elementFactories.OPTION;
export const OUTPUT = elementFactories.OUTPUT;
export const P = elementFactories.P;
export const PARAM = elementFactories.PARAM;
export const PRE = elementFactories.PRE;
export const SCRIPT = elementFactories.SCRIPT;
export const SECTION = elementFactories.SECTION;
export const SELECT = elementFactories.SELECT;
export const SOURCE = elementFactories.SOURCE;
export const SPAN = elementFactories.SPAN;
export const STYLE = elementFactories.STYLE;
export const TEXTAREA = elementFactories.TEXTAREA;
