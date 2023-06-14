import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ReactSearchBox from 'react-search-box';
import { suggestions } from '../shared/data/cities';

const Conntainer = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 0px;

  span > input {
    border-radius: 25px;
    font-weight: 500;
  }
`;

const IconButton = styled.button`
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
`;

const StyledIcon = styled(FaSearch)`
  color: #5151e5;
  cursor: pointer;
`;

const ErrorMessage = styled.h3`
  font-weight: 500;
  color: rgb(255, 255, 255);
`;

function SearchBar() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (record) => {
    setSelectedValue(record?.item?.value);
  };

  return (
    <Conntainer>
      <ReactSearchBox
        leftIcon={
          <IconButton>
            <StyledIcon />
          </IconButton>
        }
        iconBoxSize="48px"
        onChange={(value) => {
          setValue(value);
        }}
        onSelect={(record) => handleSelect(record)}
        data={suggestions}
        inputFontColor="#414856"
        placeholder="Search city in UK..."
      />
      {value?.length > 0 && selectedValue === '' && <ErrorMessage>Unfortunately, no loaction is found.</ErrorMessage>}
    </Conntainer>
  );
}

export default SearchBar;
