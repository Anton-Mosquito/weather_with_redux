import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Dots = (): JSX.Element => {
    return (
        <Span></Span>
    )
}

const move = keyframes`
100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
}
`;

const Span = styled.span`
width: 20vmin;
height: 20vmin;
border-radius: 20vmin;
backface-visibility: hidden;
position: absolute;
animation-name: ${move};
animation-duration: 6s;
animation-timing-function: linear;
animation-iteration-count: infinite;

&:nth-child(1) {
color: #171730;
top: 8%;
left: 82%;
animation-duration: 12.7s;
animation-delay: -7.1s;
transform-origin: 14vw 16vh;
box-shadow: -40vmin 0 11.355vmin #171730;
}

&:nth-child(2) {
color: #21172f;
top: 11%;
left: 84%;
animation-duration: 16s;
animation-delay: -7.5s;
transform-origin: 0vw -6vh;
box-shadow: 40vmin 0 8.23129vmin #21172f;
}

&:nth-child(3) {
color: #21172f;
top: 6%;
left: 79%;
animation-duration: 14.4s;
animation-delay: -1.4s;
transform-origin: -5vw 16vh;
box-shadow: -40vmin 0 10.53284vmin #21172f;
}

&:nth-child(4) {
color: #15222c;
top: 76%;
left: 13%;
animation-duration: 13.5s;
animation-delay: -8.8s;
transform-origin: -12vw 9vh;
box-shadow: 40vmin 0 13.90046vmin #15222c;
}

&:nth-child(5) {
color: #171730;
top: 87%;
left: 9%;
animation-duration: 12.4s;
animation-delay: -9.7s;
transform-origin: -17vw -2vh;
box-shadow: -40vmin 0 9.68086vmin #171730;
}

&:nth-child(6) {
color: #21172f;
top: 23%;
left: 39%;
animation-duration: 10.8s;
animation-delay: -0.6s;
transform-origin: 5vw 0vh;
box-shadow: 40vmin 0 7.08275vmin #21172f;
}

&:nth-child(7) {
color: #15222c;
top: 4%;
left: 67%;
animation-duration: 10.4s;
animation-delay: -7.2s;
transform-origin: -18vw -9vh;
box-shadow: -40vmin 0 7.07752vmin #15222c;
}

&:nth-child(8) {
color: #21172f;
top: 4%;
left: 58%;
animation-duration: 10.3s;
animation-delay: -10.5s;
transform-origin: -5vw -4vh;
box-shadow: -40vmin 0 11.50681vmin #21172f;
}

&:nth-child(9) {
color: #171730;
top: 91%;
left: 49%;
animation-duration: 12.8s;
animation-delay: -5s;
transform-origin: 6vw -14vh;
box-shadow: 40vmin 0 5.71496vmin #171730;
}

&:nth-child(10) {
color: #21172f;
top: 13%;
left: 61%;
animation-duration: 13.1s;
animation-delay: -11.9s;
transform-origin: 13vw -6vh;
box-shadow: -40vmin 0 6.28516vmin #21172f;
}

&:nth-child(11) {
color: #171730;
top: 51%;
left: 37%;
animation-duration: 11.7s;
animation-delay: -12.6s;
transform-origin: 12vw -8vh;
box-shadow: -40vmin 0 7.5548vmin #171730;
}

&:nth-child(12) {
color: #171730;
top: 30%;
left: 98%;
animation-duration: 15.8s;
animation-delay: -15.5s;
transform-origin: 25vw 18vh;
box-shadow: -40vmin 0 7.8254vmin #171730;
}

&:nth-child(13) {
color: #15222c;
top: 22%;
left: 43%;
animation-duration: 12s;
animation-delay: -8.2s;
transform-origin: -7vw 23vh;
box-shadow: 40vmin 0 11.78703vmin #15222c;
}

&:nth-child(14) {
color: #171730;
top: 100%;
left: 94%;
animation-duration: 13.2s;
animation-delay: -3.1s;
transform-origin: -17vw 13vh;
box-shadow: -40vmin 0 5.34329vmin #171730;
}

&:nth-child(15) {
color: #15222c;
top: 64%;
left: 78%;
animation-duration: 13.2s;
animation-delay: -5.3s;
transform-origin: 0vw -15vh;
box-shadow: 40vmin 0 11.32768vmin #15222c;
}

&:nth-child(16) {
color: #21172f;
top: 44%;
left: 35%;
animation-duration: 13s;
animation-delay: -3.6s;
transform-origin: 5vw -17vh;
box-shadow: -40vmin 0 14.03915vmin #21172f;
}

&:nth-child(17) {
color: #15222c;
top: 100%;
left: 5%;
animation-duration: 14.4s;
animation-delay: -15.6s;
transform-origin: 17vw -4vh;
box-shadow: 40vmin 0 8.58716vmin #15222c;
}

&:nth-child(18) {
color: #15222c;
top: 91%;
left: 69%;
animation-duration: 14.5s;
animation-delay: -8.7s;
transform-origin: -16vw -19vh;
box-shadow: 40vmin 0 7.2715vmin #15222c;
}

&:nth-child(19) {
color: #21172f;
top: 87%;
left: 96%;
animation-duration: 11.5s;
animation-delay: -15.5s;
transform-origin: -20vw -11vh;
box-shadow: -40vmin 0 7.73618vmin #21172f;
}

&:nth-child(20) {
color: #15222c;
top: 7%;
left: 85%;
animation-duration: 14.7s;
animation-delay: -7.6s;
transform-origin: 21vw -7vh;
box-shadow: -40vmin 0 10.62407vmin #15222c;
}
`;

