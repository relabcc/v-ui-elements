import React from 'react';
import styled from 'styled-components';
import Flex from 'grid-styled/dist/Flex';
import {
  responsiveStyle,
} from 'styled-system';

const injectHeight = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default styled(({ height, ...props }) => <Flex {...props} />)`
  ${injectHeight}
`;
