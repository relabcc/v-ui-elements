'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  cursor: pointer;\n  border-radius: 1.75em;\n  border: 1px solid ', ';\n  background-color: transparent;\n  color: ', ';\n  transition: all 0.25s ease;\n  line-height: 1;\n  > * {\n    vertical-align: middle;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  ', '\n  ', '\n  ', ';\n'], ['\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  cursor: pointer;\n  border-radius: 1.75em;\n  border: 1px solid ', ';\n  background-color: transparent;\n  color: ', ';\n  transition: all 0.25s ease;\n  line-height: 1;\n  > * {\n    vertical-align: middle;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: ', ';\n    border-color: ', ';\n    color: ', ';\n  }\n\n  ', '\n  ', '\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanElement = require('clean-element');

var _cleanElement2 = _interopRequireDefault(_cleanElement);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fullWidth = function fullWidth(props) {
  return props.fullWidth ? { width: '100%' } : null;
};

var hoverColor = function hoverColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'green';
  return function (props) {
    return props.disabled ? null : _theme.colors[color];
  };
};

var Button = (0, _styledComponents2.default)((0, _cleanElement2.default)('button'))(_templateObject, _theme.colors.white, _theme.colors.white, hoverColor('green'), hoverColor('green'), hoverColor('black'), fullWidth, _styledSystem.fontSize, _styledSystem.space);

Button.defaultProps = {
  f: '1em',
  px: '2.5em',
  py: '0.75em'
};

exports.default = Button;