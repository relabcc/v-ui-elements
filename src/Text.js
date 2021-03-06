import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  style,
  display,
  textAlign,
  margin,
} from 'styled-system';
import tag from 'clean-tag';

import { textIndent, letterSpacing } from './utils/customProps';
import blacklist from './utils/blacklist';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const Text = styled(tag.p)`
  margin-top: 0;
  margin-bottom: 0;
  ${display}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
  ${textTransform}
  ${textIndent}
  ${margin}
  ${letterSpacing}
`;

Text.defaultProps = {
  lineHeight: 1.5,
  blacklist,
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

export default Text;
