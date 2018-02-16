import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';

import { responsive } from './utils/propTypes';
import injectProps from './utils/injectProps';

import Relative from './Relative';

const Back = styled(({
  src,
  size,
  position,
  cursor,
  ...props
}) => (
  <Relative {...props} />
))`
  background-image: url(${({ src }) => src});
  background-size: ${({ size }) => size};
  background-position: ${({ position }) => position};
  ${injectProps('cursor')}
`;

Back.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
};

Back.defaultProps = {
  size: 'cover',
  position: '50% 50%',
};

const percent = n => (isNumber(n) ? `${n * 100}%` : n);

const toPercent = ratio => (isArray(ratio) ? ratio.map(percent) : percent(ratio));

const BackgroundImage = ({ ratio, fit, ...props }) =>
  <Back pb={!fit && toPercent(ratio)} {...props} />;

BackgroundImage.propTypes = {
  ratio: responsive,
  fit: PropTypes.bool,
};

BackgroundImage.defaultProps = {
  ratio: 9 / 16,
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
