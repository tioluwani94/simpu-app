import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const DivStyle = ({ cssProp }) => css`
  ${cssProp};
`;
const ULStyle = ({ cssProp }) => css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  ${cssProp};
`;
const ImageStyle = ({ cssProp }) => css`
  ${cssProp};
`;

const CustomLinkStyle = ({ cssProp, border, color }) => css`
  ${cssProp};
  border-bottom: ${border ? '1px solid #000000' : ''};
  color: ${color};
  cursor: pointer;
  display: inline-block;
`;

export const Div = styled.div`
  ${DivStyle};
`;

export const UL = styled.ul`
  ${ULStyle};
`;
export const Image = styled.img`
  ${ImageStyle};
`;

export const CustomLink = styled.a`
  ${CustomLinkStyle};
`;

export const Grid = ({ gridCss, children, numberOfItems }) => (
  <Div
    cssProp={`
      .cell {
        margin: 1rem;
      }
      ${gridCss};
      @media screen and (min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        .cell {
          width: calc(50% - 2rem);
        }
      }
      @media screen and (min-width: 1000px) {
        .cell {
          width: calc((100% / ${numberOfItems}) - 2rem);
        }
      }
    `}
  >
    {children}
  </Div>
);

Grid.defaultProps = {
  gridCss: '',
  children: '',
  numberOfItems: 1,
};
Grid.propTypes = {
  gridCss: PropTypes.string,
  children: PropTypes.node,
  numberOfItems: PropTypes.number,
};
