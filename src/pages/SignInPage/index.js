import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SignIn from '../../components/SignIn';

const SignInPage = (props) => {
  return (
    <StyledSignInPage>
      <h1 className="page-title">SIGN IN</h1>
      <SignIn />
    </StyledSignInPage>
  );
};

const StyledSignInPage = styled.div``;

// SignInPage.propTypes = {};

export default SignInPage;
