import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Directory from '../../components/Directory/Directory';

const Homepage = (props) => {
  return (
    <StyledHomePage>
      <Directory />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Homepage.propTypes = {};

export default Homepage;
