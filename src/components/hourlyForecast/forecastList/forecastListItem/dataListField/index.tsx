import React from 'react';
import { DataListFieldItem } from './dataListFieldItem';
import styled from 'styled-components';

type DataProps = {
    data : [string, number];
}

type ArrayKey = [string, number]

export const DataListField: React.FC<DataProps> = ({data}: DataProps) => {
    let innerHeaderField: string;
    let innerItemFieldArray: Array<ArrayKey> = [];

    switch (data[0]) {
        case 'main':
            innerHeaderField = 'Temperature';
            innerItemFieldArray = Object.entries(data[1]).filter((item: ArrayKey) => item[0] === 'temp' || item[0] === 'feels_like');
        break;
        case 'wind':
            innerHeaderField = 'Wind';
            innerItemFieldArray = Object.entries(data[1]);
        break;
        default:
            innerHeaderField = 'unknown';
        break;
    }
    
    return (
        <List>
            <ListHeader><h3>{innerHeaderField}</h3></ListHeader>
            {innerItemFieldArray.map((item: ArrayKey, index: number)=> <DataListFieldItem key={index} data={item}/>)}
        </List>
    )
}


const List = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 14px);
grid-gap: 5px;
`;

const ListHeader = styled.li`
display: flex;
align-items: center;
justify-content: center;
color: #171730;
font-weight: 500;
`;