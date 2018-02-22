'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanElement = require('clean-element');

var _cleanElement2 = _interopRequireDefault(_cleanElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var Text = (0, _styledComponents2.default)(function (_ref) {
  var lh = _ref.lineHeight,
      props = _objectWithoutProperties(_ref, ['lineHeight']);

  return _react2.default.createElement(P, props);
})(_templateObject, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, align, _styledSystem.fontWeight, _styledSystem.lineHeight, textTransform);

Text.defaultProps = {
  lineHeight: 1.5
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

exports.default = Text;