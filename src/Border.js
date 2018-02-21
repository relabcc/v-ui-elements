import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import injectProps from './utils/injectProps';

const sides = [
  'top',
  'left',
  'right',
  'bottom',
];

const getSides = props => sides.reduce((style, key) => {
  const value = props[key];
  if (value) return style;
  return `${style}border-${key}: none;`;
}, '');

const Border = styled(({
  top,
  left,
  bottom,
  right,
  borderColor,
  borderWidth,
  borderStyle,
  ...props
}) => (
  <Box {...props} />
))`
  ${injectProps('borderColor', true)}
  ${injectProps('borderWidth')}
  ${injectProps('borderStyle')}
  ${props => sides.some(key => props[key]) && getSides(props)}
`;

Border.defaultProps = {
  borderColor: 'white',
  borderWidth: '1px',
  borderStyle: 'solid',
};

export default Border;
