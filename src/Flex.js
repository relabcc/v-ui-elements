import React from 'react';
import styled from 'styled-components';
import Flex from 'grid-styled/dist/Flex';
import {
  responsiveStyle,
} from 'styled-system';

import injectProps from './utils/injectProps';

const injectHeight = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default styled(({ height, overflow, ...props }) => <Flex {...props} />)`
  ${injectHeight}
  ${injectProps('overflow')}
`;
