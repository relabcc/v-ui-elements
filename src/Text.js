import styled from 'styled-components';
import PropTypes from 'prop-types';
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

import theme from './theme';

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

Text.displayName = 'Text';

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  color: PropTypes.string,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray,
};

Text.defaultProps = {
  theme,
  lineHeight: 1.5,
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');

export default Text;
