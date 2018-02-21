'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

var _cleanElement = require('clean-element');

var _cleanElement2 = _interopRequireDefault(_cleanElement);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

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

Text.displayName = 'Text';

var numberStringOrArray = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]);

Text.propTypes = {
  fontSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),
  align: _propTypes2.default.oneOf(['left', 'center', 'right', 'justify']),
  color: _propTypes2.default.string,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
};

Text.defaultProps = {
  theme: _theme2.default,
  lineHeight: 1.5
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

exports.default = Text;