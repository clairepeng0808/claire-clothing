import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/CollectionPreview';

const ShopPage = (props) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(SHOP_DATA);
  }, []);

  return (
    <StyledShopPage>
      <h1 className="page-title">SHOP</h1>
      <div className="collection">
        {shopData.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    </StyledShopPage>
  );
};

const StyledShopPage = styled.div``;

// ShopPage.propTypes = {};

export default ShopPage;
