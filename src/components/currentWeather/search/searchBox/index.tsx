import React from 'react';
import sprite from "../../../../assets/sprite.svg";
import { ChangeEvent, memo } from 'react';
import styled from 'styled-components';

type DataProps = {
    valueOfField : string;
    changeValue: (value: string) => void;
}

export const SearchBox = memo(({valueOfField, changeValue}: DataProps): JSX.Element => {
    return (
    <Wrapper>
        <Input placeholder="Enter the city name..." onChange={(event: ChangeEvent) => changeValue((event.target as HTMLInputElement).value)} value={valueOfField}/>
        <Button type="submit">
            <Icon>
                <use href={sprite + "#search"}></use>
                </Icon>
        </Button>
    </Wrapper>
    )
})

const Wrapper = styled.p`
position: relative;
width: 300px;
height: 60px;
`;

const Input = styled.input`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
padding: 10px 65px 10px 20px;
border-radius: 3px;
font-size: 18px;
border-radius: 50px;
`;

const Button  = styled.button`
position: absolute;
top: 0;
right: 0;
width: 60px;
height: 100%;
background: #7690da;
z-index: 1;
cursor: pointer;
right: 0px;
border-radius: 50%;

&hover{
    background: #708bd2;
}
`
const Icon = styled.svg`
width: 30px;
height: 30px;
`;