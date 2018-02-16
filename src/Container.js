import React from 'react';
import { responsiveStyle } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';
import { containerWidth } from './theme';

const injectMaxWidth = responsiveStyle({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
  numberToPx: true,
  key: 'containerWidth',
});

const Container = styled(({ maxWidth, ...props }) => <Box {...props} />)`
  ${injectMaxWidth}
`;

Container.defaultProps = {
  mx: 'auto',
  px: '1em',
  maxWidth: containerWidth,
};

export default Container;
