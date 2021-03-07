import styled, { keyframes } from 'styled-components';

export const Loader = () => {
    return (
        <Wrapper>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
        </Wrapper>
    )
}

const animation = keyframes`
0% {
    transform: rotateY(0deg) rotateX(0deg);
    opacity: 1;
}
25% {
    transform: rotateY(180deg) rotateX(360deg);
}
50% {
    transform: rotateY(540deg) rotateX(540deg);
}
75% {
    transform: rotateY(720deg) rotateX(900deg);
}
100% {
    transform: rotateY(900deg) rotateX(1080deg);
    opacity: 1;
}
`;



const Wrapper = styled.div`
-ms-flex-item-align: center;
-ms-grid-row-align: center;
align-self: center;
-ms-grid-column-align: center;
justify-self: center;
width: 550px;
height: 550px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
perspective: 11000px;
transform-style: preserve-3d;
`;

const Circle = styled.div`
transform-style: preserve-3d;
box-sizing: border-box;
opacity: 0;
width: 550px;
height: 550px;
border: 6px solid #e96f50;
border-radius: 413px;
position: absolute;
top: 0;
left: 0;
animation: ${animation} 13.5s ease-in-out alternate infinite;

&:nth-of-type(1) {
    animation-delay: 225ms;
}

&:nth-of-type(2) {
    animation-delay: 450ms;
}

&:nth-of-type(3) {
    animation-delay: 675ms;
}

&:nth-of-type(4) {
    animation-delay: 900ms;
}

&:nth-of-type(5) {
    animation-delay: 1125ms;
}
`;
