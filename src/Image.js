import styled from 'styled-components';
import { space, width } from 'styled-system';
import cleanElement from 'clean-element';
import { px } from 'styled-system/dist/util';

import injectProps from './utils/injectProps';

const Img = cleanElement('img');

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

Image.displayName = 'Image';

export default Image;
