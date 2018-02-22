'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Next = require('./svg/Next');

var _Next2 = _interopRequireDefault(_Next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonNext = function ButtonNext(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _Button2.default,
    _extends({ px: '1.5em' }, props),
    _react2.default.createElement(
      'span',
      null,
      children
    ),
    _react2.default.createElement(_Next2.default, { f: '1.5em', ml: '0.5em', w: '1em' })
  );
};

ButtonNext.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = ButtonNext;