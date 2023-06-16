import React from 'react';
import styled from 'styled-components';
import { getIcon } from '../shared/utils';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 25px;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;

const DayHeader = styled.h3`
  color: #11116f;
  font-size: 600;
`;

const TempImg = styled.img`
  width: 70px;
  height: 70px;
`;

const MainWeather = styled.h3`
  color: #11116f;
  font-size: 600;
  text-align: center;
`;

const TempValue = styled.h3`
  color: #333399;
  font-weight: 500;
`;

function CreateForecastWeather({ list }) {
  return (
    <ContentWrapper>
      {list?.map((item, index) => (
        <ContentColumn key={index}>
          <DayHeader>{item?.day}</DayHeader>
          <TempImg src={getIcon({ id: item?.iconId })} />
          <MainWeather>{item.main}</MainWeather>
          <TempValue>{item.tempValue}°</TempValue>
        </ContentColumn>
      ))}
    </ContentWrapper>
  );
}

export default CreateForecastWeather;
