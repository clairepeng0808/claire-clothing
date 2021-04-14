import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const SignInPage = (props) => {
  return (
    <StyledSignInPage>
      <h1 className="page-title ">SIGN IN</h1>
      <div className="page-content">
        <SignIn />
        <SignUp />
      </div>
    </StyledSignInPage>
  );
};

const StyledSignInPage = styled.div`
  .page-content {
    display: flex;
    justify-content: space-between;
  }
`;

// SignInPage.propTypes = {};

export default SignInPage;
