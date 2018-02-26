import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import Border from './Border';
// import Text from './Text';

const addSeperator = (accu, current, index) => {
  let toConcat = current;
  if (index > 0) {
    toConcat = [
      <Border w="1px" height="1em" display="inline" mx="1em" borderColor="white" right key={`sep-${index}`} />,
      current,
    ];
  }
  return accu.concat(toConcat);
};

class LinkGroup extends Component {
  parseChildren = (children) => {
    const count = React.Children.count(children);
    if (count <= 1) return children;
    return React.Children.toArray(children).reduce(addSeperator, []);
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <Box {...props}>
        {this.parseChildren(children)}
      </Box>
    );
  }
}

LinkGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default LinkGroup;
