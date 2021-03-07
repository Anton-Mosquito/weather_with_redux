import React from 'react';
import { DescriptionListItem } from './descriptionListItem/descriptionListItem';
import styled from "styled-components";
import { useSelector } from 'react-redux';

type TitleProps = {
    title: string
}

type ArrayKey = [string, number]

export const DescriptionList: React.FC<TitleProps> = ({ title }) => {
    const dataPosition = useSelector((state: any) => state.weather.dataPosition);


    let temperatureArray: any = [];
    let sunArray: any = [];
    let windArray: any = [];
    let visibilityArray: any = [];
    let cloudArray: any = [];

    if (dataPosition) {
        switch (title) {
            case 'Temperature parameters':
                temperatureArray = Object.entries(dataPosition.main).filter((item) => item[0] !== 'temp' && item[0] !== 'sea_level' && item[0] !== 'grnd_level' && item[0] !== 'pressure');
                break;
            case 'Sunrise & Sunset data':
                sunArray = Object.entries(dataPosition.sys).filter((item) => item[0] !== 'country' && item[0] !== 'id' && item[0] !== 'type');
                break;
            case 'Visibility':
                visibilityArray = Object.entries(dataPosition).filter((item) => item[0] === 'visibility');
                break;
            case 'Wind':
                windArray = Object.entries(dataPosition.wind).filter((item) => item[0] !== 'gust');
                break;
            case 'Cloudiness':
                cloudArray = Object.entries(dataPosition.clouds)
                break;
        }
    }
    
    return (
        <List>
            <Title>{title}</Title>
            {temperatureArray?.map((item: ArrayKey, index: number) => <DescriptionListItem key={index} value={item} />)}
            {sunArray?.map((item: ArrayKey, index: number) => <DescriptionListItem key={index} value={item} />)}
            {visibilityArray?.map((item: ArrayKey, index: number) => <DescriptionListItem key={index} value={item} />)}
            {windArray?.map((item: ArrayKey, index: number) => <DescriptionListItem key={index} value={item} />)}
            {cloudArray?.map((item: ArrayKey, index: number) => <DescriptionListItem key={index} value={item} />)}
        </List>
    )
}


const List = styled.ul`
display: grid;
grid-column: 100%;
grid-template-rows: min-content;
grid-gap: 5px;
`;

const Title = styled.li`
text-align: center;
font-weight: 500;
font-size: 1.2rem;
color: #171730;
`;
