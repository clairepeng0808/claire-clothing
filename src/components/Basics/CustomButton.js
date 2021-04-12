import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import color from '../../style/color';

const CustomButton = (props) => {
  return <StyledCustomButton {...props}>{props.children}</StyledCustomButton>;
};

const StyledCustomButton = styled.button`
  border: 1px solid ${color.primary};
  background-color: transparent;
  color: ${color.primary};
  width: 120px;
  height: 38px;
  border-radius: 4px;
  padding: 4px 12px;
  user-select: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${color.primary};
    border-color: ${color.primary};
    color: ${color.white};
  }

  &:hover {
    box-shadow: none;
  }

  &:active,
  &:focus,
  &:visited {
    box-shadow: 0 0 0 2px rgba(21, 151, 187, 0.2);
  }

  ${(props) =>
    props.variant === 'googleSignIn' &&
    css`
      width: auto;
      border: 1px solid ${color.orange};
      color: ${color.orange};
      &:hover,
      &:focus,
      &:active {
        background-color: ${color.orange};
        border-color: ${color.orange};
        color: ${color.white};
      }
    `}
`;

// Button.propTypes = {};

export default React.memo(CustomButton);
