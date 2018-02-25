'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-image: url(', ');\n  background-size: ', ';\n  background-position: ', ';\n  background-repeat: no-repeat;\n  ', '\n'], ['\n  background-image: url(', ');\n  background-size: ', ';\n  background-position: ', ';\n  background-repeat: no-repeat;\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

var _propTypes3 = require('./utils/propTypes');

var _Relative = require('./Relative');

var _Relative2 = _interopRequireDefault(_Relative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundImage = _Relative2.default.extend(_templateObject, function (_ref) {
  var src = _ref.src;
  return src;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var position = _ref3.position;
  return position;
}, _styledSystem.ratio);

BackgroundImage.propTypes = {
  ratio: _propTypes3.responsive,
  src: _propTypes2.default.string,
  size: _propTypes2.default.string,
  position: _propTypes2.default.string
};

BackgroundImage.defaultProps = {
  ratio: 9 / 16,
  size: 'cover',
  position: '50% 50%'
};

BackgroundImage.displayName = 'BackgroundImage';

exports.default = BackgroundImage;