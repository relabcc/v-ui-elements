'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _Box = require('grid-styled/dist/Box');

var _Box2 = _interopRequireDefault(_Box);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var height = (0, _styledSystem.responsiveStyle)({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true
});

exports.default = _Box2.default.extend(_templateObject, height);