import React from "react";
import styled from 'styled-components';

type DateProps = {
    data : [string, number]
}

export const DateField: React.FC<DateProps>= ({data}: DateProps) => {
    const innerData = new Date(data[1] * 1000).toLocaleString();
    
    return (
        <Header>
            <time dateTime={innerData}>{innerData}</time>
        </Header>
    )
}

const Header = styled.h3`
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
font-weight: 600;
`;