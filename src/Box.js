import Box from 'grid-styled/dist/Box';
import {
  responsiveStyle,
} from 'styled-system';

const height = responsiveStyle({
  prop: 'height',
  cssProperty: 'height',
  numberToPx: true,
});

export default Box.extend`
  ${height}
`;
