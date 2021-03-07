import React, { useEffect, useMemo } from 'react';
import useCurrentLocation from './hooks/useCurrentLocation';

import { CurrentWeather } from './components/currentWeather/currentWeather';
import { Dots } from './components/dots/dots';
import { HourlyForecast } from './components/hourlyForecast/hourlyForecast';


import { geolocationOptions } from "./constant/option";
import { defaultCoords } from "./constant/defaultCoords";
import { dots } from './constant/quantityOfDots'

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadCurrentWeather, recordLastCoords } from './store/actions';


export const App: React.FC = () => {
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
        <Containter>
          <HourlyForecast />
          <CurrentWeather />
        </Containter>
      </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
position: relative;
`;

const Background = styled.div`
width: 100vw;
height: 100vh;
background: #48484a;
z-index: 1;
`;

const Containter = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: grid;
grid-template-columns: 72% 28%;
grid-template-rows: 1fr;
`;
