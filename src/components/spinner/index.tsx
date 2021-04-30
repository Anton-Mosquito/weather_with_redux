import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Spinner = (): JSX.Element => {
    return (
        <SpinnerBlock></SpinnerBlock>
    )
}

const Loader = keyframes`
0% {
    transform: scale(0);
    opacity: 0;
}
50% {
    opacity: 1;
}
100% {
    transform: scale(1);
    opacity: 0;
}
`;

const SpinnerBlock = styled.div`
width: 319px;
height: 319px;
line-height: 319px;
margin: 106px auto;
position: relative;
box-sizing: border-box;
text-align: center;
z-index: 0;
text-transform: uppercase;

&:before, &:after{
opacity: 0;
box-sizing: border-box;
content: "\0020";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 213px;
border: 11px solid #171730;
box-shadow: 0 0 106px #21172f, inset 0 0 106px #21172f;
}

&:before {
z-index: 2;
animation: ${Loader} 2.3s infinite;
}

&:after {
z-index: 1;
animation: ${Loader} 2.3s infinite 1.15s;
}
`;