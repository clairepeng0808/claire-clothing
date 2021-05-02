import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebaseUtils';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav">
        <Link className="nav-item" to="/shop">
          SHOP
        </Link>
        <Link className="nav-item" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="nav-item" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="nav-item" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  .nav-item {
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    &:hover {
      cursor: pointer;
      color: gray;
    }
  }
`;

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default React.memo(Header);
