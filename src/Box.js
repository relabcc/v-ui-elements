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
} from 'styled-system';

import injectProps from './utils/injectProps';
import blacklist from './utils/blacklist';

const injectTransform = responsiveStyle({
  prop: 'transform',
  cssProperty: 'transform',
});

const injectPositon = responsiveStyle({
  prop: 'position',
  cssProperty: 'position',
});

const StyledBox = styled(Box)`
  ${display}
  ${height}
  ${injectProps('overflow')}
  ${injectProps('overflowX')}
  ${injectProps('overflowY')}
  ${injectPositon}
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
