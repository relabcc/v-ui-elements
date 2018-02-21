import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontSize, fontWeight, space, color, responsiveStyle } from 'styled-system';
import cleanElement from 'clean-element';

import injectProps from './utils/injectProps';
import theme from './theme';

const P = cleanElement('p');

const align = responsiveStyle({
  prop: 'align',
  cssProperty: 'textAlign',
});

const Text = styled(P)`
  ${fontSize}
  ${space}
  ${color}
  ${align}
  ${fontWeight}
  ${injectProps('textTransform')}
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
};

Text.span = Text.withComponent('span');
Text.p = Text.withComponent('p');
Text.s = Text.withComponent('s');

export default Text;
