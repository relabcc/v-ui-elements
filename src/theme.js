import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

export const font = 'sans-serif';

export const colors = {
  black: '#000000',
  white: '#ffffff',
  green: '#07d3b5',
  yellow: '#ffc215',
  red: '#ff8278',
  blue: '#30adf9',
};

export const breakpoints = [36, 48, 62, 75]; // em
export const containerWidth = ['100%', 720, 960, 1280];

export const theme = merge(constants, {
  breakpoints,
  colors,
  regular: 400,
  bold: 700,
  containerWidth,
});
