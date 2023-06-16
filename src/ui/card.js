import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  border: none;
  border-radius: 15px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
  margin-bottom: 25px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 25px;
  text-align: left;
`;

const Header = styled.h3`
  color: rgb(128, 128, 128);
  font-weight: 500;
`;

function Card({ title, children }) {
  return (
    <Container>
      <HeaderWrapper>
        <Header>{title}</Header>
      </HeaderWrapper>
      {children}
    </Container>
  );
}

export default Card;
