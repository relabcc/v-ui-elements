'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (key) {
  return function (props) {
    return !(0, _isNil2.default)(props[key]) && (0, _kebabCase2.default)(key) + ': ' + props[key] + ';';
  };
};