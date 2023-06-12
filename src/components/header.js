import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderText = styled.h1`
  font-size: 42px;
  font-weight: 400;
  color: rgb(255, 255, 255);

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>WeatherNow</HeaderText>
    </HeaderWrapper>
  );
}

export default Header;
