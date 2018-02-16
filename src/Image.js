import styled from 'styled-components';
import { space, width } from 'styled-system';

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  ${width};
  ${space};
`;

Image.displayName = 'Image';

export default Image;
