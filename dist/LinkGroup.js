'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Border = require('./Border');

var _Border2 = _interopRequireDefault(_Border);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addSeperator = function addSeperator(accu, current, index) {
  var toConcat = current;
  if (index > 0) {
    toConcat = [_react2.default.createElement(_Border2.default, { w: '1px', height: '1em', display: 'inline', mx: '1em', borderColor: 'white', right: true, key: 'sep-' + index }), current];
  }
  return accu.concat(toConcat);
};

var LinkGroup = function (_Component) {
  _inherits(LinkGroup, _Component);

  function LinkGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkGroup.__proto__ || Object.getPrototypeOf(LinkGroup)).call.apply(_ref, [this].concat(args))), _this), _this.parseChildren = function (children) {
      var count = _react2.default.Children.count(children);
      if (count <= 1) return children;
      return _react2.default.Children.toArray(children).reduce(addSeperator, []);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        _Flex2.default,
        _extends({ align: 'center' }, props),
        this.parseChildren(children)
      );
    }
  }]);

  return LinkGroup;
}(_react.Component);

LinkGroup.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired
};

exports.default = LinkGroup;