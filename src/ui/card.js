import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  border: none;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 25px;
  text-align: left;
`;

const Header = styled.h3`
  color: rgb(128, 128, 128);
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-bottom: 25px;

  ${(props) =>
    props.columns === 7 &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    `}
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${(props) =>
    props.align === 'center' &&
    css`
      align-items: center;
    `}
`;

function Card({ columns, align, columnsContent, title }) {
  return (
    <Container>
      <HeaderWrapper>
        <Header>{title}</Header>
      </HeaderWrapper>
      <ContentWrapper columns={columns}>
        {columnsContent?.map((column, index) => (
          <ContentColumn align={align} key={index}>
            {column}
          </ContentColumn>
        ))}
      </ContentWrapper>
    </Container>
  );
}

export default Card;
