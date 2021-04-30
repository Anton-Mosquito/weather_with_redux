import React from 'react';
import { ForecastHeader } from './forecastHeader';
import { ForecastList } from './forecastList';
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

@media screen and (max-width: 650px) {
        grid-template-rows: 70px 1fr;
}
`;