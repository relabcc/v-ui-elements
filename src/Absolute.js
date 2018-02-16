import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isBoolean from 'lodash/isBoolean';
import { px } from 'styled-system/dist/util';
import Box from './Box';

const positions = [
  'top',
  'left',
  'right',
  'bottom',
];

const getPositions = props => positions.reduce((style, key) => {
  const value = props[key];
  if (!value) return style;
  const attr = isBoolean(value) ? 0 : px(value);
  return `${style}${key}: ${attr};`;
}, '');

const Absolute = styled(({
  top,
  left,
  right,
  bottom,
  z,
  ...props
}) => <Box {...props} />)`
  position: absolute;
  z-index: ${({ z }) => z};
  ${getPositions};
`;

const boolOrNumber = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
]);

Absolute.propTypes = {
  top: boolOrNumber,
  bottom: boolOrNumber,
  left: boolOrNumber,
  right: boolOrNumber,
  z: PropTypes.number,
};

export default Absolute;
