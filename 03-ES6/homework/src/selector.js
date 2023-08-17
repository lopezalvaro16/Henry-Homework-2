var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  function traverse(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }

    for (var i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  traverse(startEl);

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  var firstChar = selector[0];

  if (firstChar === "#") {
    return "id";
  } else if (firstChar === ".") {
    return "class";
  } else {
    var hasDot = false;
    for (var i = 0; i < selector.length; i++) {
      if (selector[i] === ".") {
        hasDot = true;
        break;
      }
    }
    if (hasDot) {
      return "tag.class";
    } else {
      return "tag";
    }
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction = function (element) {
    if (selectorType === "id") {
      return element.id === selector.subString(1);
    } else if (selectorType === "class") {
      return element.classList.contains(selector.subString(1));
    } else if (selectorType === "tag.class") {
      if (
        element.tagName &&
        element.tagName.toLowerCase() === selector.split(".")[1]
      ) {
        return true;
      } else {
        return false;
      }
    } else if (selectorType === "tag") {
      return (
        element.tagName &&
        element.tagName.toLowerCase() === selector.toLowerCase()
      );
    }
    return matchFunction;
  };
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
