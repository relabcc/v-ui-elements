'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  svg {\n    vertical-align: bottom;\n    width: 100%;\n  }\n'], ['\n  svg {\n    vertical-align: bottom;\n    width: 100%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InlineBox = require('../InlineBox');

var _InlineBox2 = _interopRequireDefault(_InlineBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _InlineBox2.default.extend(_templateObject);

var SVG = function SVG(_ref) {
  var viewBox = _ref.viewBox,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['viewBox', 'children']);

  return _react2.default.createElement(
    Container,
    props,
    _react2.default.createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: viewBox },
      children
    )
  );
};

SVG.propTypes = {
  viewBox: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};

exports.default = SVG;