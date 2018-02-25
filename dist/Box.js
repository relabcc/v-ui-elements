'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('grid-styled/dist/Box');

var _Box2 = _interopRequireDefault(_Box);

var _styledSystem = require('styled-system');

var _injectProps = require('./utils/injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

var _blacklist = require('./utils/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var injectTransform = (0, _styledSystem.responsiveStyle)({
  prop: 'transform',
  cssProperty: 'transform'
});

var StyledBox = (0, _styledComponents2.default)(_Box2.default)(_templateObject, _styledSystem.display, _styledSystem.height, (0, _injectProps2.default)('overflow'), (0, _injectProps2.default)('overflowX'), (0, _injectProps2.default)('overflowY'), injectTransform, _styledSystem.textAlign);

StyledBox.defaultProps = {
  blacklist: _blacklist2.default
};

exports.default = StyledBox;