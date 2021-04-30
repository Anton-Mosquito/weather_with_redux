import React, { memo } from 'react';
import { IRadio } from '../../../../models/radio.model';
import { RadioItem } from './radioItems';
import styled from 'styled-components'

type DataProps = {
    info: IRadio[],
    change: (id: number, value: string) => void
}

export const RadioBox = memo(({info, change}: DataProps): JSX.Element => {
    return (
        <Line>
            {info.map((item: IRadio) => <RadioItem key={item.id} onChange={change} {...item}/>)}
        </Line>
    )
})

const Line = styled.p`
display: flex;
align-items: center;
justify-content: space-evenly;
`;