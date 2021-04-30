import React, { useEffect, useMemo } from 'react';
import useCurrentLocation from '../../hooks/useCurrentLocation';

import { CurrentWeather } from '../currentWeather';
import { Dots } from '../dots';
import { HourlyForecast } from '../hourlyForecast';


import { geolocationOptions } from "../../constant/option";
import { defaultCoords } from "../../constant/defaultCoords";
import { dots } from '../../constant/quantityOfDots'

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadCurrentWeather, recordLastCoords } from '../../store/actions';


export const MainPage: React.FC = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const dispatch = useDispatch();


  const targetLoaction = useMemo(() => {
    return currentLocation ?? defaultCoords;
  }, [currentLocation]);

  useEffect(() => {
      dispatch(loadCurrentWeather(targetLoaction));
      dispatch(recordLastCoords(targetLoaction));
  }, [dispatch, targetLoaction]);

  return (
      <Wrapper>
        <Background>
          {dots().map((item: number) => <Dots key={item} />)}
        </Background>
        <Container>
          <HourlyForecast />
          <CurrentWeather />
        </Container>
      </Wrapper>
  );
}

const Wrapper = styled.div`
position: relative;
`;

const Background = styled.div`
width: 100vw;
height: 100vh;
background: #48484a;
z-index: 1;
`;

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 72% 28%;
grid-template-rows: 1fr;
overflow-y: scroll;

@media screen and (max-width: 1200px) {
  grid-template-columns: 1fr;
  grid-template-rows: 680px 680px;
}

@media screen and (min-width: 440px) and (max-width: 650px) {
  grid-template-rows: 1200px 680px;
}

@media screen and(max-width: 440px) {
  grid-template-rows: 1838px 680px;
}
`;
