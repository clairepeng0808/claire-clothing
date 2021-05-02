import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  // useState(() => {
  //   console.log(history);
  // }, []);
  return (
    <StyledMenuItem
      size={size}
      imageUrl={imageUrl}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="bg-image"></div>
      <StyledContent>
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </StyledContent>
    </StyledMenuItem>
  );
};

const StyledMenuItem = styled.div`
  position: relative;
  min-width: 30%;
  height: 240px;
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  ${(props) =>
    props.size === 'large' &&
    css`
      height: 320px;
    `}

  &:hover {
    cursor: pointer;
  }

  .bg-image {
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    &:hover {
      transform: scale(1.1);
      transition: transform 2s ease-out;
    }
  }
`;

const StyledContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`;

MenuItem.defaultProps = {
  size: null,
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(React.memo(MenuItem));
