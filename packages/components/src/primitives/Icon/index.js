import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ width, height, icon }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 512 512"
  >
    <path d={icon} />
  </svg>
);

Icon.defaultProps = {
  width: '18',
  height: '18',
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;
