'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  ', '\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  position: absolute;\n  ', '\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledSystem = require('styled-system');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var zIndex = (0, _styledSystem.style)({
  prop: 'zIndex',
  cssProperty: 'zIndex',
  alias: 'z'
});

var Absolute = _Box2.default.extend(_templateObject, zIndex, _styledSystem.top, _styledSystem.left, _styledSystem.right, _styledSystem.bottom);

exports.default = Absolute;