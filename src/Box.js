import styled from 'styled-components';
import Box from 'grid-styled/dist/Box';
import {
  responsiveStyle,
  display,
  textAlign,
  height,
} from 'styled-system';

import injectProps from './utils/injectProps';
import blacklist from './utils/blacklist';

const injectTransform = responsiveStyle({
  prop: 'transform',
  cssProperty: 'transform',
});

const StyledBox = styled(Box)`
  ${display}
  ${height}
  ${injectProps('overflow')}
  ${injectProps('overflowX')}
  ${injectProps('overflowY')}
  ${injectTransform}
  ${textAlign}
`;

StyledBox.defaultProps = {
  blacklist,
};

export default StyledBox;
