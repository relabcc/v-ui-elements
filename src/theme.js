import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

export const font = '"Lato", "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

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
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
};

const emToPx = em => em * 16;

export const breakpoints = [36, 48, 62, 75, 90].map(emToPx);
export const containerWidth = [36, 46, 60, 73].map(emToPx);

export const theme = merge(constants, {
  breakpoints,
  colors,
  containerWidth,
});
