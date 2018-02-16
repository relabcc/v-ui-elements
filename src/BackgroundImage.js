import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';

import { responsive } from './utils/propTypes';
import injectProps from './utils/injectProps';

import Relative from './Relative';

const Back = styled(({
  src, size, position, cursor, fit, ratio, ...props
}) => (
  <Relative {...props} />
))`
  background-image: url(${({ src }) => src});
  background-size: ${({ size }) => size};
  background-position: ${({ position }) => position};
  ${injectProps('cursor')}
`;

const percent = n => (isNumber(n) ? `${n * 100}%` : n);

const toPercent = ratio => (isArray(ratio) ? ratio.map(percent) : percent(ratio));

const BackgroundImage = ({ ratio, fit, ...props }) =>
  <Back pb={!fit && toPercent(ratio)} {...props} />;

Back.propTypes = {
  ratio: responsive,
  fit: PropTypes.bool,
};

Back.defaultProps = {
  size: 'cover',
  position: '50% 50%',
  ratio: 9 / 16,
};

BackgroundImage.propTypes = {
  ratio: responsive,
  fit: PropTypes.bool,
};

BackgroundImage.defaultProps = {
  ratio: 9 / 16,
};

export default BackgroundImage;
