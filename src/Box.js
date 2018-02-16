import React from 'react';
import styled from 'styled-components';
import Box from 'grid-styled/dist/Box';
import {
  responsiveStyle,
} from 'styled-system';

const injectHeight = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default styled(({ height, ...props }) => <Box {...props} />)`
  ${injectHeight}
`;
