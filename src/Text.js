import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  responsiveStyle,
  style,
} from 'styled-system';
import cleanElement from 'clean-element';

const P = cleanElement('p');

const align = responsiveStyle({
  prop: 'align',
  cssProperty: 'textAlign',
});

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const Text = styled(P)`
  margin-top: 0;
  margin-bottom: 0;
  ${fontSize}
  ${space}
  ${color}
  ${align}
  ${fontWeight}
  ${lineHeight}
  ${textTransform}
`;

Text.defaultProps = {
  lineHeight: 1.5,
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

export default Text;
