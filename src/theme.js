import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

export const font = 'sans-serif';

const green = '#07d3b5';
const yellow = '#ffc215';
const red = '#ff8278';
const blue = '#30adf9';

export const colors = {
  black: '#000000',
  white: '#ffffff',
  green,
  yellow,
  red,
  blue,
  color1: green,
  color2: yellow,
  color3: red,
  color4: blue,
};

export const breakpoints = [36, 48, 62, 75]; // em
export const containerWidth = [36, 46, 60, 73].map(em => em * 16);

export const theme = merge(constants, {
  breakpoints,
  colors,
  regular: 400,
  bold: 700,
  containerWidth,
});
