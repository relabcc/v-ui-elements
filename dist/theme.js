'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.containerWidth = exports.breakpoints = exports.colors = exports.font = undefined;

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _constants = require('styled-system/dist/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var font = exports.font = 'sans-serif';

var colors = exports.colors = {
  black: '#000000',
  white: '#ffffff',
  green: '#07d3b5',
  yellow: '#ffc215',
  red: '#ff8278',
  blue: '#30adf9'
};

var breakpoints = exports.breakpoints = [36, 48, 62, 75]; // em
var containerWidth = exports.containerWidth = ['100%', 720, 960, 1280];

var theme = exports.theme = (0, _merge2.default)(_constants2.default, {
  breakpoints: breakpoints,
  colors: colors,
  regular: 400,
  bold: 700,
  containerWidth: containerWidth
});