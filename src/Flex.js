import Flex from 'grid-styled/dist/Flex';
import {
  responsiveStyle,
} from 'styled-system';

const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default Flex.extend`
  ${height}
`;
