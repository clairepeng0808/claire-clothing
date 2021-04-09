import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import sections from './testData/directoryData';

const Directory = () => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    setSectionData(sections);
  }, []);

  return (
    <StyledDirectory>
      {sectionData?.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
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

// Directory.propTypes = {};

export default React.memo(Directory);
