import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Conntainer = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 0px;
`;

const InputWrapper = styled.div`
  position: relative;
  height: 50px;
  margin: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  transition: all 0.3s ease;
  width: 100%;

  @media only screen and (max-width: 600px) {
    height: 45px;
  }
`;

const Input = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background: #fff;
  outline: none;
  border: none;
  padding-left: 20px;
  font-size: 18px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: -2px;
  top: 0;
  width: 50px;
  background: #fff;
  height: 100%;
  text-align: center;
  line-height: 50px;
  color: #666666;
  font-size: 20px;
  border-radius: 25px;
  cursor: pointer;
`;

const Suggestions = styled.div`
  overflow-y: scroll;
  border: 1px solid #f3f3f3;
  background-color: white;
  max-height: 20rem;
  width: 100%;
  height: fit-content;
  position: absolute;
  z-index: 10;
`;

const Suggestion = styled.div`
  cursor: pointer;
  padding: 1px 10px;
  height: 2rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f3f3f3;
  }
`;

function SearchBar() {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  useEffect(() => {
    setSuggestions(['Athens, Thessaloniki']);
  }, []);

  return (
    <Conntainer>
      <InputWrapper>
        <Input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Search location..."
          placeholderTextColor="green"
          onFocus={() => setHideSuggestions(false)}
          onBlur={async () => {
            setTimeout(() => {
              setHideSuggestions(true);
            }, 200);
          }}
        />
        <IconWrapper>
          <FaSearch />
        </IconWrapper>
      </InputWrapper>
      {!hideSuggestions && (
        <Suggestions>
          {suggestions?.map((suggestion, index) => (
            <Suggestion key={index}>{suggestion?.title}</Suggestion>
          ))}
        </Suggestions>
      )}
    </Conntainer>
  );
}

export default SearchBar;
