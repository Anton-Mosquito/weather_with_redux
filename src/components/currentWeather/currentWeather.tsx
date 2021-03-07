import React, { memo } from 'react';
import { Description } from './description/description';
import { Header } from './header/header';
import { SearchForm } from './search/search';
import { Spinner } from '../spinner/spinner';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const CurrentWeather = memo(() => {
    const loadingMain = useSelector((state: any) => state.weather.loadingForm );
    const trueInfo = useSelector((state: any) => state.weather.trueInfo);
    
    return (
        <Content>
            <Header/>
            <SearchForm/>
            {loadingMain ? <Spinner/> : trueInfo ? <Description/> : ''}
        </Content>
    )
})


const Content = styled.div`
align-self: center;
justify-self: center;
padding: 15px;
background: rgba(255, 255, 255, 0.3);
box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
border-radius: 15px;
backdrop-filter: blur(10px);
display: grid;
grid-template-columns: 100%;
grid-gap: 15px;
`;