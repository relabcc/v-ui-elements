import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, fontSize } from 'styled-system';
import cleanElement from 'clean-element';

import { colors } from './theme';

const fullWidth = props => (props.fullWidth ? { width: '100%' } : null);

const hoverColor = (color = 'green') => props => (props.disabled ? null : colors[color]);

const Button = styled(cleanElement('button'))`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  border-radius: 1.75em;
  border: 1px solid ${colors.white};
  background-color: transparent;
  color: ${colors.white};
  transition: all 0.25s ease;
  line-height: 1;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover {
    background-color: ${hoverColor('green')};
    border-color: ${hoverColor('green')};
    color: ${hoverColor('black')};
  }

  ${fullWidth}
  ${fontSize}
  ${space};
`;

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

Button.propTypes = {
  /** Size */
  fullWidth: PropTypes.bool,
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

Button.defaultProps = {
  f: '1em',
  px: '2.5em',
  py: '0.75em',
};

export default Button;
