import React from 'react';
import styled from 'styled-components';
import Header from './header';
import SearchBar from './search-bar';
import Card from '../ui/card';
import CreateCurrentWeather from '../features/create-current-weather';
import CreateForecastWeather from '../features/create-forecast-weather';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { getCurrentData } from '../shared/utils';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
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

  @media only screen and (max-width: 850px) {
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 50px 25px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

function Content() {
  const current = useSelector((state) => state?.current?.data);
  const forecast = useSelector((state) => state?.forecast?.data);
  const currentLoading = useSelector((state) => state?.current?.loading);
  const currentData = !isEmpty(current) ? getCurrentData(current) : {};

  console.log(forecast);

  return (
    <Wrapper>
      <Container>
        <Header />
        <SearchBar />
        {!currentLoading && !isEmpty(current) && (
          <CardWrapper>
            <Card title="Current Weather">
              <CreateCurrentWeather {...currentData} />
            </Card>
            <Card title="Forecast Weather">
              <CreateForecastWeather />
            </Card>
          </CardWrapper>
        )}
      </Container>
    </Wrapper>
  );
}

export default Content;
