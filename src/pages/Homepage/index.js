import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Directory from '../../components/Directory/Directory';
import { Route, Link } from 'react-router-dom';

const Homepage = (props) => {
  return (
    <StyledHomePage>
      <button onClick={() => props.history.push('./hats')}>Click Me</button>
      <Directory />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

Homepage.propTypes = {};

export default Homepage;
