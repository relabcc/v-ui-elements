'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n'], ['\n  font-family: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _theme = require('./theme');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = _Box2.default.extend(_templateObject, _theme.font);

var VUiProvider = function (_Component) {
  _inherits(VUiProvider, _Component);

  function VUiProvider() {
    _classCallCheck(this, VUiProvider);

    return _possibleConstructorReturn(this, (VUiProvider.__proto__ || Object.getPrototypeOf(VUiProvider)).apply(this, arguments));
  }

  _createClass(VUiProvider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        window.WebFontConfig = {
          google: {
            families: ['Lato:300,400']
          }
        };

        (function (d) {
          var wf = d.createElement('script');
          var s = d.scripts[0];
          wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
          wf.async = true;
          s.parentNode.insertBefore(wf, s);
        })(document);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: _theme.theme },
        _react2.default.createElement(Base, _extends({ color: 'white', f: [14, 16, 18, 20, 22] }, this.props))
      );
    }
  }]);

  return VUiProvider;
}(_react.Component);

exports.default = VUiProvider;