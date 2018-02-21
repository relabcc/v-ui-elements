import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { top, left, right, bottom } from 'styled-system';
import Box from './Box';

const Absolute = styled(({
  z,
  ...props
}) => <Box {...props} />)`
  position: absolute;
  z-index: ${({ z }) => z};
  ${top};
  ${left};
  ${right};
  ${bottom};
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
