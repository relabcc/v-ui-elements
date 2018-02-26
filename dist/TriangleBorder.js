'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: rgba(255,255,255,0.2);\n  position: relative;\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    right:0;\n    top: 0;\n    border-bottom: 1.25em solid transparent;\n    border-right: 1.25em solid ', ';\n    border-top: 0 solid transparent;\n    border-left: 0 solid transparent;\n  }\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left:0;\n    bottom: 0;\n    border-bottom: 0 solid transparent;\n    border-right: 0 solid transparent;\n    border-top: 1.25em solid transparent;\n    border-left: 1.25em solid ', ';\n  }\n'], ['\n  background-color: rgba(255,255,255,0.2);\n  position: relative;\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    right:0;\n    top: 0;\n    border-bottom: 1.25em solid transparent;\n    border-right: 1.25em solid ', ';\n    border-top: 0 solid transparent;\n    border-left: 0 solid transparent;\n  }\n\n  &:before {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left:0;\n    bottom: 0;\n    border-bottom: 0 solid transparent;\n    border-right: 0 solid transparent;\n    border-top: 1.25em solid transparent;\n    border-left: 1.25em solid ', ';\n  }\n']);

var _Border = require('./Border');

var _Border2 = _interopRequireDefault(_Border);

var _getColor = require('./utils/getColor');

var _getColor2 = _interopRequireDefault(_getColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TriangleBorder = _Border2.default.extend(_templateObject, function (props) {
  return (0, _getColor2.default)(props.borderColor)(props);
}, function (props) {
  return (0, _getColor2.default)(props.borderColor)(props);
});

exports.default = TriangleBorder;