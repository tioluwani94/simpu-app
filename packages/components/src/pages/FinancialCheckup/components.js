import React from 'react';
import PropTypes from 'prop-types'
import { Div } from '../../primitives/Layout';

export const ProgressBar = ({ width, bgColor, progressBg }) => {
  return <Div cssProp={`
        height: 8px;
        background: ${bgColor};
        border-radius: 8px;
        margin-bottom: 30px;
        transition: .4s;
    `}>
      <Div cssProp={`
        width: ${width}%;
        background: ${progressBg};
        height: 8px;
        border-radius: 8px;
        transition: width .4s;
      `} />
    </Div>;
};
ProgressBar.defaultProps = {
    width: 4,
    bgColor: '#f9f9f9',
    progressBg: '#2358da',
};
