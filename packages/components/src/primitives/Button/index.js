import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { fontWeight, fontFamily } from '../../design-system/fonts';

const generateSize = (size, fontSize) => {
  if (size === 'sm') {
    return css`
      height: 32px;
      padding: 0 16px;
      font-size: ${fontSize || '14px'};
    `;
  }
  if (size === 'lg') {
    return css`
      height: 48px;
      padding: 0 16px;
      font-size: ${fontSize || '18px'};
    `;
  }
  return css`
    height: 40px;
    padding: 0 16px;
    font-size: ${fontSize || '16px'};
  `;
};
const generateType = (kind, color, background) => {
  if (kind === 'primary') {
    return `
      color: ${color};
      background: ${background};
      border-color: ${background};
      &:hover {
        opacity: 0.8;
      }
    `;
  }
  if (kind === 'secondary') {
    return `
      color: ${background};
      border: 1px solid ${background}!important;
      background: transparent;
      &:hover,
      &:active {
        color: #e46520;
        background: #f4f6f9;
        border: 1px solid #f4f6f9!important;
      }
    `;
  }
  if (kind === 'ghost') {
    return `
      color: ${color || background};
      border: none;
      background: none;
    `;
  }
  return false;
};

const ButtonSkeletonStyle = ({
  width,
  margin,
  block,
  radius,
  weight,
  size,
  kind,
  color,
  background,
  cssProp,
  boxShadow,
}) => css`
  font-family: ${fontFamily};
  text-align: center;
  width: ${width};
  margin: ${margin};
  ${block ? 'width: 100%' : `width : ${width || 'auto'}`};
  border-radius: ${radius || '3px'};
  font-weight: ${weight === 'bold' ? fontWeight.bold : fontWeight.regular};
  ${generateSize(size)};
  ${generateType(kind, color, background)};
  box-shadow: ${boxShadow ? boxShadow : 'none'};
  border: none;

  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${cssProp};
`;

export const ButtonSkeleton = styled.button`
  ${ButtonSkeletonStyle};
`;

export const Button = (props) => {
  const {
    width,
    children,
    is,
    showSpinner,
    icon,
    loadingText,
    disabled,
    cssProp,
    ...rest
  } = props;
  return (
    <ButtonSkeleton
      width={width}
      disabled={disabled || is.fetching}
      cssProp={cssProp}
      {...rest}
    >
      {is.fetching && showSpinner ? loadingText : children}
    </ButtonSkeleton>
  );
};

Button.defaultProps = {
  is: {
    fetching: false,
  },
  showSpinner: false,
  loadingText: 'Saving...',
  width: '',
  children: '',
  cssProp: '',
  kind: 'primary',
  color: '#ffffff',
  background: '#2358da',
  size: '',
  block: false,
  icon: '',
  margin: '',
  disabled: false,
};

Button.propTypes = {
  kind: PropTypes.string,
  cssProp: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  block: PropTypes.bool,
  icon: PropTypes.string,
  showSpinner: PropTypes.bool,
  loadingText: PropTypes.node,
  margin: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node,
  is: PropTypes.shape({
    fetching: PropTypes.bool,
  }),
};
