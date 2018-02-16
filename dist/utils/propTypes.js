'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PropTypes = require('prop-types');

var responsive = exports.responsive = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]);

var responsiveBoolean = exports.responsiveBoolean = PropTypes.oneOfType([PropTypes.bool, PropTypes.array]);

var numberOrString = exports.numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);