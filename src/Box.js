import React from 'react';
import styled from 'styled-components';
import Box from 'grid-styled/dist/Box';
import {
  responsiveStyle,
} from 'styled-system';

import injectProps from './utils/injectProps';

const injectHeight = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default styled(({ height, overflow, ...props }) => <Box {...props} />)`
  ${injectHeight}
  ${injectProps('overflow')}
`;
