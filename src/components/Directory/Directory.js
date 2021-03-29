import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from '../MenuItem/MenuItem';
import sections from '../Directory/directoryData';

const Directory = () => {
  const [sectionData, setSectionData] = useState(sections);

  return (
    <StyledDirectory>
      {sectionData?.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </StyledDirectory>
  );
};

const StyledDirectory = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

Directory.propTypes = {};

export default Directory;
