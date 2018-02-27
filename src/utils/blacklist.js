import { propTypes } from 'styled-system';

const allPropTypes = Object.keys(propTypes)
  .reduce((a, key) => Object.assign(a, propTypes[key]), {});

export default [
  ...Object.keys(allPropTypes),
  'textIndent',
  'indent',
  'textTransform',
  'letterSpacing',
  'spacing',
  'transform',
  'overflow',
  'overflowX',
  'overflowY',
  'z',
  'zIndex',
];
