'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('grid-styled/dist/Box');

var _Box2 = _interopRequireDefault(_Box);

var _styledSystem = require('styled-system');

var _injectProps = require('./utils/injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var injectHeight = (0, _styledSystem.responsiveStyle)({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true
});

var injectAlign = (0, _styledSystem.responsiveStyle)({
  prop: 'align',
  cssProperty: 'text-align'
});

var injectTransform = (0, _styledSystem.responsiveStyle)({
  prop: 'transform',
  cssProperty: 'transform'
});

exports.default = (0, _styledComponents2.default)(function (_ref) {
  var height = _ref.height,
      transform = _ref.transform,
      overflow = _ref.overflow,
      overflowX = _ref.overflowX,
      overflowY = _ref.overflowY,
      props = _objectWithoutProperties(_ref, ['height', 'transform', 'overflow', 'overflowX', 'overflowY']);

  return _react2.default.createElement(_Box2.default, props);
})(_templateObject, injectHeight, injectAlign, (0, _injectProps2.default)('overflow'), (0, _injectProps2.default)('overflowX'), (0, _injectProps2.default)('overflowY'), injectTransform);