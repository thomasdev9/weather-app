import React from 'react';
import styled from 'styled-components';

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
  justify-content: flex-start;
  width: 50%;
  height: auto;
`;

function Content() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default Content;
