'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanTag = require('clean-tag');

var _cleanTag2 = _interopRequireDefault(_cleanTag);

var _customProps = require('./utils/customProps');

var _blacklist = require('./utils/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textTransform = (0, _styledSystem.style)({
  prop: 'textTransform',
  cssProperty: 'textTransform'
});

var Text = (0, _styledComponents2.default)(_cleanTag2.default.p)(_templateObject, _styledSystem.display, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, _styledSystem.textAlign, _styledSystem.fontWeight, _styledSystem.lineHeight, textTransform, _customProps.textIndent, _styledSystem.margin, _customProps.letterSpacing);

Text.defaultProps = {
  lineHeight: 1.5,
  blacklist: _blacklist2.default
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

exports.default = Text;