import React from 'react';
import styled from 'styled-components';
import sprite from "../../../../../../assets/sprite.svg";

type ValueProps = {
    value : [string, number]
}

export const DescriptionListItem: React.FC<ValueProps> = ({value}: ValueProps) => {
    let firstFieldName: string;
    let secondFieldName! : string;
    let rotate!: string;
    
    switch (value[0]) {
        case 'feels_like':
            firstFieldName = 'Feels like';
            secondFieldName = `${value[1].toFixed(1)} ` + String.fromCharCode(8451);
        break;
        case 'temp_min':
            firstFieldName = 'Minimum';
            secondFieldName = `${value[1].toFixed(1)} ` + String.fromCharCode(8451);
        break;
        case 'temp_max':
            firstFieldName = 'Maximum'
            secondFieldName = `${value[1].toFixed(1)} ` + String.fromCharCode(8451);
        break;
        case 'pressure':
            firstFieldName = 'Pressure';
            secondFieldName = `${value[1]} ` + String.fromCharCode(13169);
        break;
        case 'humidity': 
            firstFieldName = 'Humidity';
            secondFieldName = `${value[1]} ` + String.fromCharCode(37);
        break;
        case 'speed': 
            firstFieldName = 'Speed';
            secondFieldName = `${value[1]} (m/s)`;
        break;
        case 'sunrise': 
            firstFieldName = 'Sunrise';
            secondFieldName = new Date(value[1] * 1000).toLocaleTimeString();
        break;
        case 'sunset': 
            firstFieldName = 'Sunset';
            secondFieldName = new Date(value[1] * 1000).toLocaleTimeString();
        break;
        case 'deg': 
            firstFieldName = 'Direction';
            rotate = `rotateZ(${value[1]}deg)`;
        break;
        case 'all': 
            firstFieldName = 'Clouds';
            secondFieldName = `${value[1]} ` + String.fromCharCode(37);
        break;
        case 'visibility': 
            firstFieldName = 'Visibility';
            secondFieldName = `${value[1]} (m)`;
        break;
        default: firstFieldName = 'Unknown status'
        break;
    }

    return (
    <ListItem>
        <span>{firstFieldName}</span>
        <span>{firstFieldName === 'Direction' ? <Icon style={{transform: rotate}}><use href={sprite + "#arrow"}></use></Icon> : secondFieldName}</span>
    </ListItem>
    )
}



const ListItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.1rem;
`;

const Icon = styled.svg`
width: 10px;
height: 10px;
`;