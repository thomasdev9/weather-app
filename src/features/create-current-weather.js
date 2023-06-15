import React from 'react';
import styled from 'styled-components';
import { getIcon } from '../shared/utils';
import { WiThermometer, WiRaindrop, WiCloudyWindy } from 'react-icons/wi';

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-bottom: 25px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    align-items: center;
    &:nth-child(2) {
      padding-top: 20px;
    }
  }
`;

const CityHeader = styled.h3`
  font-weight: 600;
  color: #11116f;
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const TempValue = styled.h1`
  font-size: 72px;
  font-weight: 200;
  color: #11116f;
`;

const TempImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 15px;
`;

const DescHeader = styled.h3`
  color: rgb(128, 128, 128);
  font-weight: 600;
  text-transform: capitalize;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0px;
`;

const InfoIcon = styled.div`
  color: #999999;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 10px;
  width: 150px;

  svg {
    font-size: 40px;
    margin-right: 10px;
  }
`;

const InfoValue = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #11116f;
`;

const information = [
  {
    title: 'Feels Like',
    value: '28°',
    icon: <WiThermometer />,
  },
  {
    title: 'Humidity',
    value: '40%',
    icon: <WiRaindrop />,
  },
  {
    title: 'Wind',
    value: '23kph',
    icon: <WiCloudyWindy />,
  },
];

function CreateCurrentWeather({ city, iconId, tempValue, desc, feelsLike, humidity, wind }) {
  const getInfo = (index) => {
    switch (index) {
      case 0:
        return `${feelsLike}°`;
      case 1:
        return `${humidity}%`;
      case 2:
        return `${wind} m/s`;
    }
  };

  return (
    <ContentWrapper>
      <ContentColumn>
        <CityHeader>{city}</CityHeader>
        <TempWrapper>
          <TempImg src={getIcon({ id: iconId })} />
          <TempValue>{tempValue}°</TempValue>
        </TempWrapper>
        <DescHeader>{desc}</DescHeader>
      </ContentColumn>
      <ContentColumn>
        {information?.map((info, index) => (
          <InfoWrapper key={index}>
            <InfoIcon>
              {info?.icon}
              {info?.title}
            </InfoIcon>
            <InfoValue>{getInfo(index)}</InfoValue>
          </InfoWrapper>
        ))}
      </ContentColumn>
    </ContentWrapper>
  );
}

export default CreateCurrentWeather;
