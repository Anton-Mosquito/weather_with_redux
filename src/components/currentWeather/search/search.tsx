import React, { FormEvent,FormEventHandler, memo, useCallback, useState} from 'react';
import { SearchBox } from './searchBox/searchBox';
import { RadioBox } from './radioBox/radioBox';

import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { updateData, updatedWeatherCityCards, updatedWeatherNearbyCards } from '../../../store/actions';


export const SearchForm: React.FC = memo(() => {
    const {typeRequset, lastCoords, lastCity} = useSelector((state: any) => state.weather);
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");

    const [ radioValue , setRadioValue ] = useState([
        {id : 1, forLabel :'Hourly', forId : 'Hourly' , text: 'Hourly', check : true},
        {id : 2, forLabel : 'Nearby', forId : 'Nearby', text: 'Nearby', check : false},
    ]);
    
    const update = useCallback((city: string): void => {
    switch (typeRequset) {
      case 'Hourly':
        dispatch(updateData(city));
      break;
      case 'Nearby':
        dispatch(updateData(city));
        dispatch(updatedWeatherNearbyCards(lastCoords));
    }
  }, [dispatch, lastCoords, typeRequset]);

    const submitHandler: FormEventHandler<HTMLFormElement> = useCallback((event: FormEvent) => {
        event.preventDefault();
        if (value.trim()) {
            update(value);
            setValue(" ");
    }
    },[update, value])

    const change = useCallback((id: number, value: string) => {
        setRadioValue( radioValue.map(radio => {
            if (radio.id === id) radio.check = !radio.check
            else radio.check = !radio.check
            return radio;
        }));
        switch (value) {
          case 'Hourly':
            dispatch(updatedWeatherCityCards(lastCity));
            break;
          case 'Nearby':
            dispatch(updatedWeatherNearbyCards(lastCoords));
            break;
          default:
            break;
        }
        
    }, [dispatch, lastCity, lastCoords, radioValue])

    return (
    <Form onSubmit={submitHandler}>
        <SearchBox valueOfField={value} changeValue={setValue}/>
        <RadioBox info={radioValue} change={change}/>
    </Form>
    )
})


const Form = styled.form`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 60px 50px;
grid-gap: 5px;
`;
