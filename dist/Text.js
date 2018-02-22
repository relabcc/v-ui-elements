'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanElement = require('clean-element');

var _cleanElement2 = _interopRequireDefault(_cleanElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var P = (0, _cleanElement2.default)('p');

var align = (0, _styledSystem.responsiveStyle)({
  prop: 'align',
  cssProperty: 'textAlign'
});

var textTransform = (0, _styledSystem.style)({
  prop: 'textTransform',
  cssProperty: 'textTransform'
});

var Text = (0, _styledComponents2.default)(P)(_templateObject, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, align, _styledSystem.fontWeight, _styledSystem.lineHeight, textTransform);

Text.defaultProps = {
  lineHeight: 1.5
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

exports.default = Text;