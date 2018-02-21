"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (color) {
  return function (props) {
    return props.theme.colors[color] || color;
  };
};