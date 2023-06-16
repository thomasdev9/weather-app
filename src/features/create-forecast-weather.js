import React from 'react';
import styled from 'styled-components';
import { getIcon } from '../shared/utils';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  overflow-x: auto;
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

const columns = [
  {
    day: 'Mon',
    iconId: '03d',
    desc: 'Clear Sky',
    tempValue: '22',
  },
  {
    day: 'Tue',
    iconId: '13d',
    desc: 'Clouds',
    tempValue: '25',
  },
  {
    day: 'Wed',
    iconId: '04d',
    desc: 'Sun',
    tempValue: '32',
  },
  {
    day: 'Thu',
    iconId: '02d',
    desc: 'Sun',
    tempValue: '20',
  },
  {
    day: 'Fri',
    iconId: '01d',
    desc: 'Sky',
    tempValue: '20',
  },
];

function CreateForecastWeather() {
  return (
    <ContentWrapper>
      {columns?.map((column, index) => (
        <ContentColumn key={index}>
          <DayHeader>{column?.day}</DayHeader>
          <TempImg src={getIcon({ id: column?.iconId })} />
          <MainWeather>{column.desc}</MainWeather>
          <TempValue>{column.tempValue}</TempValue>
        </ContentColumn>
      ))}
    </ContentWrapper>
  );
}

export default CreateForecastWeather;
