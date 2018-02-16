'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledSystem = require('styled-system');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var injectMaxWidth = (0, _styledSystem.responsiveStyle)({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
  numberToPx: true,
  key: 'containerWidth'
});

var Container = (0, _styledComponents2.default)(function (_ref) {
  var maxWidth = _ref.maxWidth,
      props = _objectWithoutProperties(_ref, ['maxWidth']);

  return _react2.default.createElement(_Box2.default, props);
})(_templateObject, injectMaxWidth);

Container.defaultProps = {
  mx: 'auto',
  px: '1em',
  maxWidth: _theme.containerWidth
};

exports.default = Container;