import React from 'react';
import styled from 'styled-components'

export const Header: React.FC = () => {
    return (
        <Title data-text="Current Weather">Current Weather</Title>
    )
}

const Title = styled.h1`
font-weight: 700;
font-size: 2rem;
color: #e96e50;
align-self: center;
justify-self: center;
text-shadow: 0 0 20px #171730;
position: relative;
z-index: 5;

&:after {
content: attr(data-text);
position: absolute;
top: 50%;
left: 50%;
width: 100%;
height: 100%;
transform: translate(-50%, -50%);
color: #171730;
z-index: -1;
filter: blur(15px);
}

&:before {
content: "";
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
background: #171730;
z-index: -2;
opacity: 0.5;
filter: blur(40px);
}
`;