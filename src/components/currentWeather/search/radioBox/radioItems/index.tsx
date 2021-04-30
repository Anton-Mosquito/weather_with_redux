import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../../../store/rootReducer';

type DataProps = {
    forLabel: string,
    forId: string,
    text: string,
    id: number,
    check : boolean,
    onChange: (id: number, value: string) => void,
}

export const RadioItem = ({forLabel, forId, text, id,check, onChange}: DataProps): JSX.Element => {
    const {trueInfo} = useSelector((state: RootState) => state.weather);

    return (
        <Label htmlFor={forLabel} >
            <Input type="radio" name="choiseCard" id={forId} value={text} checked={check} onChange={onChange.bind(null, id, text)} disabled={!trueInfo}/>
            <Span>{text}</Span>
        </Label>
    )
}

const Label = styled.label`
position: relative;
cursor: pointer;
font-size: 1.8em;
text-align: center;
`;

const Span = styled.span`
position: relative;
display: inline-block;
padding: 10px;
border: 1px solid #171730;
color: #171730;
border-radius: 10px;
`;

const Input = styled.input`
appearance: none;

&:.input:checked ~ ${Span} {
color: #e96e50;
border: 1px solid #e96e50;
}

&:checked ~ ${Span} {
    color: #e96e50;
    border-color: #e96e50;
    box-shadow: inset 0 0 10px #e96e50;
    transition: all 0.3s;
}

&:checked ~ ${Span}:before {
content: "";
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background: #171730;
z-index: -1;
filter: blur(10px);   
}

&::checked ~ ${Span}:after {
content: "";
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background: #171730;
z-index: -1;
filter: blur(15px);   
}
`;