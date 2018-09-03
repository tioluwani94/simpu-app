import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fontFamily, fontWeight } from '../../design-system/fonts';
import { gray } from '../../design-system/colors';

const TextStyle = ({
  fontSize,
  color,
  margin,
  lineHeight,
  padding,
  align,
  transform,
  cssProp,
}) => css`
  font-family: ${fontFamily};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize || '14px'};
  line-height: ${lineHeight ? fontSize * 1.5 : '24px'};
  color: ${color || '#000000'};
  margin: ${margin};
  padding: ${padding};
  text-align: ${align || 'left'};
  text-transform: ${transform};
  ${cssProp};
`;

const HeadingStyle = ({
  fontSize,
  lineHeight,
  color,
  margin,
  padding,
  align,
  transform,
  cssProp,
}) => css`
  font-family: ${fontFamily};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize || '16px'};
  line-height: ${lineHeight ? fontSize * 1.25 : '30px'};
  color: ${color || '#000000'};
  margin: ${margin};
  padding: ${padding};
  text-align: ${align || 'left'};
  text-transform: ${transform};
  ${cssProp};
`;

const LabelStyle = ({
  fontWeightProp,
  fontSize,
  lineHeight,
  color,
  align,
  transform,
  cssProp,
}) => css`
  display: block;
  font-family: ${fontFamily};
  font-weight: ${fontWeightProp || fontWeight.regular};
  font-size: ${fontSize || '14px'};
  line-height: ${lineHeight ? fontSize * 1.5 : '24px'};
  color: ${color || gray.ui03};
  padding-bottom: 8px;
  text-align: ${align || 'left'};
  text-transform: ${transform};
  ${cssProp};
`;

const SpanStyle = ({ cssProp }) => css`
  ${cssProp};
`;

export const Text = styled.p`
  ${TextStyle};
`;

export const Heading = styled.h1`
  ${HeadingStyle};
`;

export const Label = styled.label`
  ${LabelStyle};
`;
export const Span = styled.span`
  ${SpanStyle};
`;

Text.propTypes = {
  css: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  transform: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Heading.propTypes = {
  css: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  transform: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Label.propTypes = {
  css: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  transform: PropTypes.string,
};
