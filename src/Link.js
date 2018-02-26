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
  textDecoration,
  margin,
} from 'styled-system';
import tag from 'clean-tag';
import { colors } from './theme';

import { textIndent, letterSpacing } from './utils/customProps';
import blacklist from './utils/blacklist';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const Link = styled(tag.a)`
  margin-top: 0;
  margin-bottom: 0;
  text-Decoration: none;
  transition: all 0.25s ease;
  color: ${colors.white};
  &:hover,
  &:focus {
    color: ${colors.green};
  }

  ${display}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
  ${textTransform}
  ${textIndent}
  ${letterSpacing}
  ${textDecoration}
  ${margin}
`;

Link.defaultProps = {
  lineHeight: 1.5,
  display: 'inline-block',
  blacklist,
  color: 'white',
  f: '1em',
  fontWeight: 'bold',
  spacing: '0.2em',
};

export default Link;
