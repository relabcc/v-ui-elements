'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Next = function Next(props) {
  return _react2.default.createElement(
    _SVG2.default,
    _extends({}, props, { viewBox: '0 0 30 30' }),
    _react2.default.createElement('path', {
      fill: 'currentColor',
      d: 'M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M18.2,15.7l-5.1,4.8 c-0.2,0.2-0.4,0.3-0.6,0.3c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.3-0.4-0.9,0-1.3c0,0,0,0,0,0l4.4-4.1l-4.4-4.1c-0.3-0.4-0.3-1,0.1-1.3 c0.3-0.3,0.8-0.3,1.2,0l5.1,4.8C18.6,14.7,18.6,15.2,18.2,15.7C18.2,15.6,18.2,15.7,18.2,15.7z'
    })
  );
};

exports.default = Next;