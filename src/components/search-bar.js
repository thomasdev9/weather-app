import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ReactSearchBox from 'react-search-box';
import { suggestions } from '../shared/data/cities';
import { coordinates } from '../shared/data/coordinates';
import { fetchCurrent } from '../redux/slices/currentSlice';
import { fetchForecast } from '../redux/slices/forecastSlice';

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
  const dispatch = useDispatch();

  const handleSelect = (record) => {
    const selectedValue = record?.item?.value;
    const selectedKey = record?.item?.key;
    const { lat, lon } = coordinates[selectedKey];
    setSelectedValue(selectedValue);
    dispatch(fetchCurrent({ lat, lon }));
    dispatch(fetchForecast({ lat, lon }));
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
