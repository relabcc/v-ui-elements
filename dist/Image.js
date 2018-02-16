'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', '\n  ', '\n  ', ';\n'], ['\n  ', ';\n  ', '\n  ', '\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanElement = require('clean-element');

var _cleanElement2 = _interopRequireDefault(_cleanElement);

var _util = require('styled-system/dist/util');

var _injectProps = require('./utils/injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Img = (0, _cleanElement2.default)('img');

var Image = (0, _styledComponents2.default)(Img)(_templateObject, _styledSystem.space, (0, _injectProps2.default)('verticalAlign'), function (_ref) {
  var height = _ref.height;
  return height ? '\n    width: auto;\n    height: ' + (0, _util.px)(height) + ';\n  ' : '\n    width: 100%;\n    height: auto;\n  ';
}, _styledSystem.width);

Image.displayName = 'Image';

exports.default = Image;