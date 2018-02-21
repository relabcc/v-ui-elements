'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  color: ', ';\n'], ['\n  font-family: ', ';\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = _styledComponents2.default.div(_templateObject, _theme.font, _theme.colors.white);

var VUiProvider = function (_Component) {
  _inherits(VUiProvider, _Component);

  function VUiProvider() {
    _classCallCheck(this, VUiProvider);

    return _possibleConstructorReturn(this, (VUiProvider.__proto__ || Object.getPrototypeOf(VUiProvider)).apply(this, arguments));
  }

  _createClass(VUiProvider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.WebFontConfig = {
        google: {
          families: ['Lato']
        }
      };

      (function (d) {
        var wf = d.createElement('script');
        var s = d.scripts[0];
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        wf.async = true;
        s.parentNode.insertBefore(wf, s);
      })(document);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: _theme.theme },
        _react2.default.createElement(Base, this.props)
      );
    }
  }]);

  return VUiProvider;
}(_react.Component);

exports.default = VUiProvider;