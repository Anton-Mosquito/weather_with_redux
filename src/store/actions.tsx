import { ICoords } from '../models/coords.model';
import { IDataCity } from '../models/dataCity.model';
import IDataPosition from '../models/dataPosition.model';
import { 
    RECORD_POSITION,
    REQUEST_WEATHER,
    RECORD_LASTCITY,
    RECORD_CITY,
    SHOW_LOADER,
    HIDE_LOADER,
    WeatherActionTypes,
    SHOW_LOADINGCARDS,
    HIDE_LOADINGCARDS,
    RECORD_LASTCOORDS,
    UPDATED_DATA,
    TRUE_DATA,
    FALSE_DATA,
    UPDATE_WEATHER_CITY_CARDS,
    UPDATE_WEATHER_NEARBY_CARDS,
    RECORD_TYPEREQUEST
} from './types';

export const recordDataPosition = (data: IDataPosition): WeatherActionTypes => {
    return {
        type: RECORD_POSITION,
        payload: data,
    }
}

export const recordCity = (city: IDataCity): WeatherActionTypes => {
    return {
        type: RECORD_CITY,
        payload: city
    }
}

export const recordLastCity = (city: string): WeatherActionTypes => {
    return {
        type: RECORD_LASTCITY,
        payload: city
    }
}

export const recordLastCoords = (coords: ICoords): WeatherActionTypes => {
    return {
        type: RECORD_LASTCOORDS,
        payload: coords
    }
}

export const updateData = (city: string): WeatherActionTypes => {
    return {
        type: UPDATED_DATA,
        payload: city
    }
}

export const updatedWeatherCityCards = (city: string): WeatherActionTypes => {
    return {
        type: UPDATE_WEATHER_CITY_CARDS,
        payload: city
    }
}

export const updatedWeatherNearbyCards = (coords: ICoords): WeatherActionTypes => {
    return {
        type: UPDATE_WEATHER_NEARBY_CARDS,
        payload: coords
    }
}

export const trueData = (): WeatherActionTypes => {
    return {
        type: TRUE_DATA,
    }
}

export const falseData = (): WeatherActionTypes => {
    return {
        type: FALSE_DATA,
    }
}


export const showLoadingCards = (): WeatherActionTypes => {
    return {
        type: SHOW_LOADINGCARDS,
    }
}

export const hideLoadingCards = (): WeatherActionTypes => {
    return {
        type: HIDE_LOADINGCARDS,
    }
}

export const showFormLoader = (): WeatherActionTypes => {
    return {
        type: SHOW_LOADER,
    }
}

export const hideFormLoader = (): WeatherActionTypes => {
    return {
        type: HIDE_LOADER,
    }
}

export const loadCurrentWeather = (coord: ICoords): WeatherActionTypes => {
    return {
        type: REQUEST_WEATHER,
        payload: coord
    }
}

export const recordTypeRequestAction = (flag: string) : WeatherActionTypes => {
    return {
        type: RECORD_TYPEREQUEST,
        payload: flag
    }
}