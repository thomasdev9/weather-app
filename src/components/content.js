import React from 'react';
import styled from 'styled-components';
import Header from './header';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
  padding: 50px 0px;

  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 50px 25px;
  }
`;

function Content() {
  return (
    <Wrapper>
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
}

export default Content;
