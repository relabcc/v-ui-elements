'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  position: absolute;\n  z-index: ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Absolute = (0, _styledComponents2.default)(function (_ref) {
  var z = _ref.z,
      props = _objectWithoutProperties(_ref, ['z']);

  return _react2.default.createElement(_Box2.default, props);
})(_templateObject, function (_ref2) {
  var z = _ref2.z;
  return z;
}, _styledSystem.top, _styledSystem.left, _styledSystem.right, _styledSystem.bottom);

var boolOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]);

Absolute.propTypes = {
  top: boolOrNumber,
  bottom: boolOrNumber,
  left: boolOrNumber,
  right: boolOrNumber,
  z: _propTypes2.default.number
};

exports.default = Absolute;