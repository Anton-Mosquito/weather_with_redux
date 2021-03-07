import React from 'react';
import sprite from "../../assets/sprite.svg";
import styled from 'styled-components';

export const FourHundredFour: React.FC = () => {
    return (
        <Container>
            <MessageMain>Page not found</MessageMain>
            <div>
                <Icon>
                    <use href={sprite + "#404"}></use>
                </Icon>
            </div>
            <MessageAdditional>
                This city does not exist, check the name of the city and make a second request
            </MessageAdditional>
        </Container>
    )
}

const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
    text-align: center;
`;

const MessageMain = styled.h4`
position: relative;
font-size: 1.5em;
line-height: 1em;
margin-bottom: 20px;
color: #15222c;
background: #fff;
font-weight: 300;
padding: 10px 20px;
display: inline-block;
`;

const Icon = styled.svg`
width: 250px;
height: 150px;
`;

const MessageAdditional = styled.p`
color: #fff;
font-size: 1.2em;
`;