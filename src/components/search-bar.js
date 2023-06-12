import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ReactSearchBox from 'react-search-box';

const Conntainer = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 0px;

  span > input {
    border-radius: 25px;
    font-weight: 500;
  }
`;

const StyledIcon = styled(FaSearch)`
  color: #5151e5;
  cursor: pointer;
`;

function SearchBar() {
  const [value, setValue] = useState('');
  const suggestions = [
    {
      key: 'london',
      value: 'London',
    },
    {
      key: 'birmingham',
      value: 'Birmingham',
    },
    {
      key: 'manchester',
      value: 'Manchester',
    },
    {
      key: 'liverpool',
      value: 'Liverpool',
    },
    {
      key: 'leeds',
      value: 'Leeds',
    },
    {
      key: 'sheffield',
      value: 'Sheffield',
    },
    {
      key: 'teesside',
      value: 'Teesside',
    },
    {
      key: 'sheffield',
      value: 'Sheffield',
    },
    {
      key: 'bristol',
      value: 'Bristol',
    },
    {
      key: 'bournemouth',
      value: 'Bournemouth',
    },
    {
      key: 'leicester',
      value: 'Leicester',
    },
    {
      key: 'wirral',
      value: 'Wirral ',
    },
    {
      key: 'coventry',
      value: 'Coventry',
    },
    {
      key: 'nottingham',
      value: 'Nottingham',
    },
    {
      key: 'bradford',
      value: 'Bradford',
    },
    {
      key: 'newcastle',
      value: 'Newcastle',
    },
    {
      key: 'bolton',
      value: 'Bolton',
    },
    {
      key: 'brighton',
      value: 'Brighton',
    },
    {
      key: 'Plymouth',
      value: 'plymouth',
    },
    {
      key: 'hull',
      value: 'Hull',
    },
    {
      key: 'preston',
      value: 'Preston',
    },
  ];

  console.log(value);

  return (
    <Conntainer>
      <ReactSearchBox
        leftIcon={<StyledIcon />}
        iconBoxSize="48px"
        onChange={(value) => {
          setValue(value);
        }}
        data={suggestions}
        inputFontColor="#414856"
        placeholder="Search city in UK..."
      />
    </Conntainer>
  );
}

export default SearchBar;
