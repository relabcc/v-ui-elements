import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  responsiveStyle,
  style,
  display,
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

const Text = styled(({ lineHeight: lh, ...props }) => <P {...props} />)`
  margin-top: 0;
  margin-bottom: 0;
  ${display}
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
