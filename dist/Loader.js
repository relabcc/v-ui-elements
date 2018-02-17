'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(-100%);\n  }\n'], ['\n  from {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(-100%);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  white-space: nowrap;\n  animation: ', 's ', ' linear infinite;\n'], ['\n  white-space: nowrap;\n  animation: ', 's ', ' linear infinite;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: top;\n'], ['\n  display: inline-block;\n  vertical-align: top;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var move = (0, _styledComponents.keyframes)(_templateObject);

var Wrapper = (0, _styledComponents2.default)(function (_ref) {
  var duration = _ref.duration,
      props = _objectWithoutProperties(_ref, ['duration']);

  return _react2.default.createElement(_Box2.default, props);
})(_templateObject2, function (_ref2) {
  var duration = _ref2.duration;
  return duration;
}, move);

var ColorBar = _Box2.default.extend(_templateObject3);

var Loader = function Loader(_ref3) {
  var colors = _ref3.colors,
      height = _ref3.height,
      duration = _ref3.duration,
      props = _objectWithoutProperties(_ref3, ['colors', 'height', 'duration']);

  return _react2.default.createElement(
    _Box2.default,
    _extends({ overflow: 'hidden', height: height }, props),
    _react2.default.createElement(
      Wrapper,
      { duration: duration, height: height },
      (0, _range2.default)(8).map(function (index) {
        return _react2.default.createElement(ColorBar, { key: index, w: 1 / 4, bg: colors[index % 4], height: '100%' });
      })
    )
  );
};

Loader.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  height: _propTypes2.default.string,
  duration: _propTypes2.default.number
};

Loader.defaultProps = {
  colors: (0, _range2.default)(1, 5).map(function (n) {
    return _theme.colors['color' + n];
  }),
  height: '4px',
  duration: 2
};

exports.default = Loader;