import React from 'react';

import { ForecastListItem } from './forecastListItem';
import { Loader } from '../../loader';
import { FourHundredFour } from '../../404';

import { IMainInfo } from '../../../models/dataCity.model';

import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

export const ForecastList: React.FC = () => {
    const {dataCity, loadingCards, trueInfo} = useSelector((state: RootState) => state.weather);

    let quantityOfCards: Array<IMainInfo> = [];

    if (dataCity?.list) quantityOfCards = dataCity.list.slice(0,9);
    
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

@media screen and (max-width: 440px) {
    grid-template-columns: 200px;
    grid-template-rows: repeat(5, 190px);
}

@media screen and (min-width: 440px) and (max-width: 650px) {
        grid-template-columns: 200px 200px;
        grid-template-rows: repeat(4, 190px);
}
`;
