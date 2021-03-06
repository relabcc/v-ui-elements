import React from 'react';
import styled from 'styled-components';
import Flex from 'grid-styled/dist/Flex';
import { responsiveStyle, display } from 'styled-system';

import injectProps from './utils/injectProps';

const injectHeight = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default styled(({
  height,
  overflow,
  overflowX,
  overflowY,
  ...props
}) => <Flex {...props} />)`
  ${display}
  ${injectHeight}
  ${injectProps('overflow')}
  ${injectProps('overflowX')}
  ${injectProps('overflowY')}
`;
