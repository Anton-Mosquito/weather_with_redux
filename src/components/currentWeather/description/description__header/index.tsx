import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { RootState } from '../../../../store/rootReducer';

export const DescriptionHeader: React.FC = () => {
    const dataPosition = useSelector((state: RootState) => state.weather.dataPosition);
    const date : number | undefined = dataPosition?.dt;
    
    return (
    <Header>
        <p>{dataPosition?.name}</p>
        <p>{date ? new Date(date * 1000).toLocaleDateString() : Date.now()}</p>
    </Header>
    )
}

const Header = styled.div`
display: flex;
flex-direction: row;
align-content: center;
justify-content: space-between;
font-size: 1.5rem;
color: #171730;
font-weight: 500;
`;