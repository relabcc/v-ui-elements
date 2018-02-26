'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n  text-Decoration: none;\n  transition: all 0.25s ease;\n  color: ', ';\n  &:hover,\n  &:focus {\n    color: ', ';\n  }\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n  text-Decoration: none;\n  transition: all 0.25s ease;\n  color: ', ';\n  &:hover,\n  &:focus {\n    color: ', ';\n  }\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanTag = require('clean-tag');

var _cleanTag2 = _interopRequireDefault(_cleanTag);

var _theme = require('./theme');

var _customProps = require('./utils/customProps');

var _blacklist = require('./utils/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textTransform = (0, _styledSystem.style)({
  prop: 'textTransform',
  cssProperty: 'textTransform'
});

var Link = (0, _styledComponents2.default)(_cleanTag2.default.a)(_templateObject, _theme.colors.white, _theme.colors.green, _styledSystem.display, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, _styledSystem.textAlign, _styledSystem.fontWeight, _styledSystem.lineHeight, textTransform, _customProps.textIndent, _customProps.letterSpacing, _styledSystem.textDecoration, _styledSystem.margin);

Link.defaultProps = {
  lineHeight: 1.5,
  display: 'inline-block',
  blacklist: _blacklist2.default,
  color: 'white',
  fontSize: '1em',
  fontWeight: 'bold',
  spacing: '0.2em'
};

exports.default = Link;