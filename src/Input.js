import styled from 'styled-components';
import tag from 'clean-tag';
import {
  width,
  space,
  fontSize,
  color,
  border,
  lineHeight,
} from 'styled-system';

import blacklist from './utils/blacklist';
import { textIndent, letterSpacing } from './utils/customProps';

const Input = styled(tag.input)`
  font-family: inherit;
  padding: 0px;
  &:focus {
    outline: none;
  }
  ${width}
  ${color}
  ${space}
  ${fontSize}
  ${textIndent}
  ${border}
  ${lineHeight}
  ${letterSpacing}

  &:disabled,
  &[disabled] {
    color: ${({ theme }) => theme.colors.gray[6]};
    cursor: not-allowed;
  }
`;

Input.defaultProps = {
  w: 1,
  my: '1rem',
  f: '1em',
  indent: '1em',
  bg: 'transparent',
  color: 'white',
  lineHeight: 2.25,
  border: '1px solid white',
  spacing: '0.1em',
  blacklist,
};

export default Input;
