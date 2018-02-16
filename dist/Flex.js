'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Flex = require('grid-styled/dist/Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var injectHeight = (0, _styledSystem.responsiveStyle)({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true
});

exports.default = (0, _styledComponents2.default)(function (_ref) {
  var height = _ref.height,
      props = _objectWithoutProperties(_ref, ['height']);

  return _react2.default.createElement(_Flex2.default, props);
})(_templateObject, injectHeight);