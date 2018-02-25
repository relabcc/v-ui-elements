'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cursor = exports.textIndent = exports.letterSpacing = undefined;

var _styledSystem = require('styled-system');

var _injectProps = require('./injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var letterSpacing = exports.letterSpacing = (0, _styledSystem.responsiveStyle)({
  prop: 'letterSpacing',
  cssProperty: 'letterSpacing',
  alias: 'spacing'
});

var textIndent = exports.textIndent = (0, _styledSystem.responsiveStyle)({
  prop: 'textIndent',
  cssProperty: 'textIndent',
  numberToPx: true,
  alias: 'indent'
});

var cursor = exports.cursor = (0, _injectProps2.default)('cursor');