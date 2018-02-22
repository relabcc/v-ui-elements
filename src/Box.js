import React from 'react';
import styled from 'styled-components';
import Box from 'grid-styled/dist/Box';
import { responsiveStyle } from 'styled-system';

import injectProps from './utils/injectProps';

const injectHeight = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

const injectAlign = responsiveStyle({
  prop: 'align',
  cssProperty: 'text-align',
});

const injectTransform = responsiveStyle({
  prop: 'transform',
  cssProperty: 'transform',
});

export default styled(({
  height,
  transform,
  overflow,
  overflowX,
  overflowY,
  ...props
}) => <Box {...props} />)`
  ${injectHeight}
  ${injectAlign}
  ${injectProps('overflow')}
  ${injectProps('overflowX')}
  ${injectProps('overflowY')}
  ${injectTransform}
`;
