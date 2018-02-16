'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: ', ';\n  ', ';\n'], ['\n  position: absolute;\n  z-index: ', ';\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _isBoolean = require('lodash/isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _util = require('styled-system/dist/util');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var positions = ['top', 'left', 'right', 'bottom'];

var getPositions = function getPositions(props) {
  return positions.reduce(function (style, key) {
    var value = props[key];
    if (!value) return style;
    var attr = (0, _isBoolean2.default)(value) ? 0 : (0, _util.px)(value);
    return '' + style + key + ': ' + attr + ';';
  }, '');
};

var Absolute = (0, _styledComponents2.default)(function (_ref) {
  var top = _ref.top,
      left = _ref.left,
      right = _ref.right,
      bottom = _ref.bottom,
      z = _ref.z,
      props = _objectWithoutProperties(_ref, ['top', 'left', 'right', 'bottom', 'z']);

  return _react2.default.createElement(_Box2.default, props);
})(_templateObject, function (_ref2) {
  var z = _ref2.z;
  return z;
}, getPositions);

var boolOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]);

Absolute.propTypes = {
  top: boolOrNumber,
  bottom: boolOrNumber,
  left: boolOrNumber,
  right: boolOrNumber,
  z: _propTypes2.default.number
};

exports.default = Absolute;