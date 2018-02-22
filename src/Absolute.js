import {
  top,
  left,
  right,
  bottom,
  style,
} from 'styled-system';

import Box from './Box';

const zIndex = style({
  prop: 'zIndex',
  cssProperty: 'zIndex',
  alias: 'z',
});

const Absolute = Box.extend`
  position: absolute;
  ${zIndex}
  ${top};
  ${left};
  ${right};
  ${bottom};
`;

export default Absolute;
