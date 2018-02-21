'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _injectProps = require('./utils/injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sides = ['top', 'left', 'right', 'bottom'];

var getSides = function getSides(props) {
  return sides.reduce(function (style, key) {
    var value = props[key];
    if (value) return style;
    return style + 'border-' + key + ': none;';
  }, '');
};

var Border = (0, _styledComponents2.default)(function (_ref) {
  var top = _ref.top,
      left = _ref.left,
      bottom = _ref.bottom,
      right = _ref.right,
      borderColor = _ref.borderColor,
      borderWidth = _ref.borderWidth,
      borderStyle = _ref.borderStyle,
      props = _objectWithoutProperties(_ref, ['top', 'left', 'bottom', 'right', 'borderColor', 'borderWidth', 'borderStyle']);

  return _react2.default.createElement(_Box2.default, props);
})(_templateObject, (0, _injectProps2.default)('borderColor', true), (0, _injectProps2.default)('borderWidth'), (0, _injectProps2.default)('borderStyle'), function (props) {
  return sides.some(function (key) {
    return props[key];
  }) && getSides(props);
});

Border.defaultProps = {
  borderColor: 'white',
  borderWidth: '1px',
  borderStyle: 'solid'
};

exports.default = Border;