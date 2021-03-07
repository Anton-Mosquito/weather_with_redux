import { ICoords } from "../models/coords.model";
import { IDataCity } from "../models/dataCity.model";
import IDataPosition from "../models/dataPosition.model";

export const RECORD_POSITION = 'WEATHER/RECORD_DATA_POSITION';
export const RECORD_CITY = 'WEATHER/RECORD_CITY';
export const RECORD_LASTCITY = 'WEATHER/RECORD_LAST_CITY';
export const RECORD_LASTCOORDS = 'WEATHER/RECORD_LAST_COORDS';
export const UPDATED_DATA = 'WEATHER/UPDATED_DATA';
export const TRUE_DATA = 'WEATHER/TRUE_DATA';
export const FALSE_DATA = 'WEATHER/FALSE_DATA';
export const REQUEST_WEATHER = 'WEATHER/LOAD_WEATHER';
export const UPDATE_WEATHER_CITY_CARDS = 'WEATHER/UPDATE_WEATHER_CITY_CARDS';
export const UPDATE_WEATHER_NEARBY_CARDS = 'WEATHER/UPDATE_WEATHER_NEARBY_CARDS';
export const RECORD_TYPEREQUEST = 'WEATHER/RECORD_TYPE_REQUEST'

export const SHOW_LOADINGCARDS = 'CARDS/SHOW_LOADING_CARDS';
export const HIDE_LOADINGCARDS = 'CARDS/HIDE_LOADING_CARDS';
export const SHOW_LOADER = 'FORM/SHOW_LOADER';
export const HIDE_LOADER = 'FORM/HIDE_LOADER';


interface recordPositionAction {
        type: typeof RECORD_POSITION,
        payload: IDataPosition,
}

interface recordLastCityAction {
        type: typeof RECORD_LASTCITY,
        payload: string,
}

interface recordCityAction {
        type: typeof RECORD_CITY,
        payload: IDataCity,
}

interface recordLastCoordsAction {
    type: typeof RECORD_LASTCOORDS,
    payload: ICoords,
}

interface updateDataAction {
    type: typeof UPDATED_DATA,
    payload: string,
}

interface updatedWeatherCityCardsAction {
    type: typeof UPDATE_WEATHER_CITY_CARDS,
    payload: string,
}

interface updatedWeatherNearbyCardsAction {
    type: typeof UPDATE_WEATHER_NEARBY_CARDS,
    payload: ICoords,
}

interface trueDataAction {
    type: typeof TRUE_DATA,
}

interface falseDataAction {
    type: typeof FALSE_DATA,
}

interface showLoadingCardAction {
    type: typeof SHOW_LOADINGCARDS,
}

interface hideLoadingCardAction {
    type: typeof HIDE_LOADINGCARDS,
}

interface showFormLoaderAction {
        type: typeof SHOW_LOADER,
}

interface hideFormLoaderAction {
        type: typeof HIDE_LOADER,
}

interface loadCurrentWeatherAction {
    type: typeof REQUEST_WEATHER,
    payload: ICoords,
}

interface recordTypeRequestAction {
    type: typeof RECORD_TYPEREQUEST,
    payload: string,
}


export type WeatherActionTypes = 
    recordPositionAction |
    recordLastCityAction | 
    recordCityAction | 
    updateDataAction |
    showLoadingCardAction | 
    hideLoadingCardAction | 
    showFormLoaderAction | 
    hideFormLoaderAction | 
    recordLastCoordsAction |
    trueDataAction |
    falseDataAction |
    updatedWeatherCityCardsAction |
    updatedWeatherNearbyCardsAction |
    recordTypeRequestAction |
    loadCurrentWeatherAction;