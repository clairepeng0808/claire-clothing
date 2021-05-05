import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CollectionItem from './Basics/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview d-flex flex-wrap">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
          ))}
      </div>
    </StyledCollectionPreview>
  );
};
const StyledCollectionPreview = styled.div`
  margin: 30px 30px;

  .title {
    font-weight: bold;
  }
`;

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
};

export default React.memo(CollectionPreview);
