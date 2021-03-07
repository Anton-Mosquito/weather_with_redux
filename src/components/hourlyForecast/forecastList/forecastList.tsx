import React from 'react';

import { ForecastListItem } from './forecastListItem/forecastListItem';
import { Loader } from '../../loader/loader';
import { FourHundredFour } from '../../404/404';

import { IMainInfo } from '../../../models/dataCity.model';

import styled from 'styled-components'
import { useSelector } from 'react-redux';

export const ForecastList: React.FC = () => {
    const {dataCity, loadingCards, trueInfo} = useSelector((state: any) => state.weather);

    let quantityOfCards: Array<IMainInfo> = [];

    if (dataCity.list) quantityOfCards = dataCity.list.slice(0,9);
    
    return (
        <MainList>
            {loadingCards ? <Loader/> : trueInfo ? quantityOfCards.map((item: IMainInfo, index: number)=> <ForecastListItem key={index} data={item}/>) : <FourHundredFour/>}
        </MainList>
    )
}

const MainList = styled.div`
align-self: center;
justify-self: center;
display: grid;
grid-template-columns: 200px 200px 200px;
grid-template-rows: 190px 190px 190px;
grid-gap: 10px;
align-content: center;
justify-items: center;
padding-bottom: 10px;
position: relative;
`;
