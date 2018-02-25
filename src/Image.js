import styled from 'styled-components';
import { space, width } from 'styled-system';
import tag from 'clean-tag';
import { px } from 'styled-system/dist/util';

import injectProps from './utils/injectProps';

const Img = tag.img;

const Image = styled(Img)`
  ${space};
  ${injectProps('verticalAlign')}
  ${({ height }) => (height ? `
    width: auto;
    height: ${px(height)};
  ` : `
    width: 100%;
    height: auto;
  `)}
  ${width};
`;

export default Image;
