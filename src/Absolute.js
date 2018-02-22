import React from 'react';
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

export default Absolute;
