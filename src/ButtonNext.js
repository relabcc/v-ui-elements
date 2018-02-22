import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Next from './svg/Next';

const ButtonNext = ({ children, ...props }) => (
  <Button px="1.5em" {...props}>
    <span>{children}</span>
    <Next f="1.5em" ml="0.5em" w="1em" />
  </Button>
);

ButtonNext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonNext;
