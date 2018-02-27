'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledSystem = require('styled-system');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var allPropTypes = Object.keys(_styledSystem.propTypes).reduce(function (a, key) {
  return Object.assign(a, _styledSystem.propTypes[key]);
}, {});

exports.default = [].concat(_toConsumableArray(Object.keys(allPropTypes)), ['textIndent', 'indent', 'textTransform', 'letterSpacing', 'spacing', 'transform', 'positon', 'overflow', 'overflowX', 'overflowY']);