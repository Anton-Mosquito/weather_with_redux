import React from 'react';
import styled from 'styled-components';
import sprite from "../../../../../../assets/sprite.svg";

type DataProps = {
    data : [string, number];
}

export const DataListFieldItem: React.FC<DataProps> = ({data}: DataProps) => {
    let nameOfFields = '';
    let valueOfField = '';
    let rotate = '';

    switch (data[0]) {
        case 'temp':
            nameOfFields = 'Temperature';
            valueOfField = data[1].toFixed(1) + String.fromCharCode(8451)
        break;
        case 'feels_like':
            nameOfFields = 'Feels like';
            valueOfField = data[1].toFixed(1) + String.fromCharCode(8451)
        break;
        case 'speed':
            nameOfFields = 'Speed';
            valueOfField = data[1].toFixed(1) + '(m/s)'
        break;
        case 'deg':
            nameOfFields = 'Direction';
            valueOfField = data[1].toFixed(1) + String.fromCharCode(37);
            rotate = `rotateZ(${data[1]}deg)`;
        break;
    }
    
    return (
            <ListItem>
                <span>{nameOfFields}</span>
                <span>{nameOfFields === 'Direction' ? <Icon style={{transform: rotate}}><use href={sprite + "#arrow"}></use></Icon> : valueOfField}</span>
            </ListItem>
    )
}



const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Icon = styled.svg`
width: 10px;
height: 10px;
`;
