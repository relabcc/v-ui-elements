import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import range from 'lodash/range';

import Box from './Box';
import { colors as themeColors } from './theme';

const move = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const Wrapper = styled(({ duration, ...props }) => <Box {...props} />)`
  white-space: nowrap;
  animation: ${({ duration }) => duration}s ${move} linear infinite;
`;

const ColorBar = Box.extend`
  display: inline-block;
  vertical-align: top;
`;

const Loader = ({
  colors,
  height,
  duration,
  ...props
}) => (
  <Box overflow="hidden" height={height} {...props}>
    <Wrapper duration={duration} height={height}>
      {range(8).map(index => (
        <ColorBar key={index} w={1 / 4} bg={colors[index % 4]} height="100%" />
      ))}
    </Wrapper>
  </Box>
);

Loader.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.string,
  duration: PropTypes.number,
};

Loader.defaultProps = {
  colors: range(1, 5).map(n => themeColors[`color${n}`]),
  height: '0.25em',
  duration: 2,
};

export default Loader;
