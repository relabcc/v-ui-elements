'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: inherit;\n  padding: 0px;\n  &:focus {\n    outline: none;\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:disabled,\n  &[disabled] {\n    color: ', ';\n    cursor: not-allowed;\n  }\n'], ['\n  font-family: inherit;\n  padding: 0px;\n  &:focus {\n    outline: none;\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:disabled,\n  &[disabled] {\n    color: ', ';\n    cursor: not-allowed;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _cleanTag = require('clean-tag');

var _cleanTag2 = _interopRequireDefault(_cleanTag);

var _styledSystem = require('styled-system');

var _blacklist = require('./utils/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _customProps = require('./utils/customProps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = (0, _styledComponents2.default)(_cleanTag2.default.input)(_templateObject, _styledSystem.width, _styledSystem.color, _styledSystem.space, _styledSystem.fontSize, _customProps.textIndent, _styledSystem.border, _styledSystem.lineHeight, _customProps.letterSpacing, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.gray[6];
});

Input.defaultProps = {
  w: 1,
  my: '1rem',
  f: '1em',
  indent: '1em',
  bg: 'transparent',
  color: 'white',
  lineHeight: 2.25,
  border: '1px solid white',
  spacing: '0.1em',
  blacklist: _blacklist2.default
};

exports.default = Input;