import styled from 'styled-components';
import Box from 'grid-styled/dist/Box';
import {
  responsiveStyle,
  display,
  textAlign,
  height,
  top,
  left,
  right,
  bottom,
  position,
  style,
} from 'styled-system';

import injectProps from './utils/injectProps';
import blacklist from './utils/blacklist';

const injectTransform = responsiveStyle({
  prop: 'transform',
  cssProperty: 'transform',
});

const zIndex = style({
  prop: 'zIndex',
  cssProperty: 'zIndex',
  alias: 'z',
});

const StyledBox = styled(Box)`
  ${display}
  ${height}
  ${injectProps('overflow')}
  ${injectProps('overflowX')}
  ${injectProps('overflowY')}
  ${position}
  ${zIndex}
  ${injectTransform}
  ${textAlign}
  ${top}
  ${left}
  ${right}
  ${bottom}
`;

StyledBox.defaultProps = {
  blacklist,
};

export default StyledBox;
