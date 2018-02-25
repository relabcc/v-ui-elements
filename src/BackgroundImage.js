import PropTypes from 'prop-types';
import { ratio } from 'styled-system';

import { responsive } from './utils/propTypes';
import Relative from './Relative';

const BackgroundImage = Relative.extend`
  background-image: url(${({ src }) => src});
  background-size: ${({ size }) => size};
  background-position: ${({ position }) => position};
  background-repeat: no-repeat;
  ${ratio}
`;

BackgroundImage.propTypes = {
  ratio: responsive,
  src: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
};

BackgroundImage.defaultProps = {
  ratio: 9 / 16,
  size: 'cover',
  position: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
