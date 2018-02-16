'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  background-image: url(', ');\n  background-size: ', ';\n  background-position: ', ';\n  ', '\n'], ['\n  background-image: url(', ');\n  background-size: ', ';\n  background-position: ', ';\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _propTypes3 = require('./utils/propTypes');

var _injectProps = require('./utils/injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

var _Relative = require('./Relative');

var _Relative2 = _interopRequireDefault(_Relative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Back = (0, _styledComponents2.default)(function (_ref) {
  var src = _ref.src,
      size = _ref.size,
      position = _ref.position,
      cursor = _ref.cursor,
      props = _objectWithoutProperties(_ref, ['src', 'size', 'position', 'cursor']);

  return _react2.default.createElement(_Relative2.default, props);
})(_templateObject, function (_ref2) {
  var src = _ref2.src;
  return src;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var position = _ref4.position;
  return position;
}, (0, _injectProps2.default)('cursor'));

Back.propTypes = {
  src: _propTypes2.default.string,
  size: _propTypes2.default.string,
  position: _propTypes2.default.string
};

Back.defaultProps = {
  size: 'cover',
  position: '50% 50%'
};

var percent = function percent(n) {
  return (0, _isNumber2.default)(n) ? n * 100 + '%' : n;
};

var toPercent = function toPercent(ratio) {
  return (0, _isArray2.default)(ratio) ? ratio.map(percent) : percent(ratio);
};

var BackgroundImage = function BackgroundImage(_ref5) {
  var ratio = _ref5.ratio,
      fit = _ref5.fit,
      props = _objectWithoutProperties(_ref5, ['ratio', 'fit']);

  return _react2.default.createElement(Back, _extends({ pb: !fit && toPercent(ratio) }, props));
};

BackgroundImage.propTypes = {
  ratio: _propTypes3.responsive,
  fit: _propTypes2.default.bool
};

BackgroundImage.defaultProps = {
  ratio: 9 / 16
};

BackgroundImage.displayName = 'BackgroundImage';

exports.default = BackgroundImage;