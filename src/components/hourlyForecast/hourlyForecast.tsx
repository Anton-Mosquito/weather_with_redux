import React from 'react';
import { ForecastHeader } from './forecastHeader/ForecastHeader';
import { ForecastList } from './forecastList/forecastList';
import styled from 'styled-components'


export const HourlyForecast: React.FC = () => {
    return (
        <Cards>
            <ForecastHeader/>
            <ForecastList/>
        </Cards>
    )
}

const Cards = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 10vh 90vh;
`;