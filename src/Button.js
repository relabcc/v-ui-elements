import styled from 'styled-components';
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
  > * {
    vertical-align: middle;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover,
  &:focus {
    background-color: ${hoverColor('green')};
    border-color: ${hoverColor('green')};
    color: ${hoverColor('black')};
  }

  ${fullWidth}
  ${fontSize}
  ${space};
`;

Button.defaultProps = {
  f: '1em',
  px: '2.5em',
  py: '0.75em',
};

export default Button;
