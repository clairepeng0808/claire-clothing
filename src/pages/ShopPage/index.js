import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = (props) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(SHOP_DATA);
  }, []);

  return (
    <div className="container">
      <StyledShopPage>
        <h1 className="page-title">SHOP PAGE</h1>
        <div className="collection">
          {shopData.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))}
        </div>
      </StyledShopPage>
    </div>
  );
};

const StyledShopPage = styled.div`
  .page-title {
    font-size: 48px;
    font-weight: bold;
  }
`;

ShopPage.propTypes = {};

export default ShopPage;
