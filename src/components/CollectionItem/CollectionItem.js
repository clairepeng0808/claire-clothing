import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <StyledCollectionItem imageUrl={imageUrl}>
      <div className="collection-image"></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
    </StyledCollectionItem>
  );
};

const StyledCollectionItem = styled.div`
  height: 350px;
  width: 24%;
  min-width: 200px;
  margin: 12px 1% 0 0;

  .collection-image {
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 95%;
  }
  .collection-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5%;
  }
`;

CollectionItem.propTypes = {};

export default CollectionItem;
