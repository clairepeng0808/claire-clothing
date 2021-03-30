import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = (props) => {
  return (
    <StyledHeader>
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav">
        <Link className="nav-item" to="/shop">
          SHOP
        </Link>
        <Link className="nav-item" to="./shop">
          CONTACT
        </Link>
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
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

Header.propTypes = {};

export default Header;
