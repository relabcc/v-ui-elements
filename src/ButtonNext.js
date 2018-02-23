import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Next from './svg/Next';

const render = (Comp) => {
  const ButtonNext = ({ children, ...props }) => {
    const Btn = Comp ? Button.withComponent(Comp) : Button;
    return (
      <Btn px="1.5em" {...props}>
        <span>{children}</span>
        <Next f="1.5em" ml="0.5em" w="1em" />
      </Btn>
    );
  };

  ButtonNext.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return ButtonNext;
};

const Base = render();

Base.withComponent = render;

export default Base;
