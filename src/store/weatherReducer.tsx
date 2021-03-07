import { ICoords } from "../models/coords.model";
import { IDataCity } from "../models/dataCity.model";
import IDataPosition from "../models/dataPosition.model";
import { 
    RECORD_POSITION,
    RECORD_LASTCITY,
    RECORD_CITY,
    SHOW_LOADINGCARDS,
    HIDE_LOADINGCARDS,
    TRUE_DATA,
    FALSE_DATA,
    RECORD_TYPEREQUEST,
    SHOW_LOADER,
    HIDE_LOADER,
    WeatherActionTypes,
    RECORD_LASTCOORDS
} from "./types";

export interface IinitialState {
    dataPosition: IDataPosition | {};
    dataCity: IDataCity | {};
    lastCity: string;
    loadingCards: boolean;
    loadingForm: boolean;
    lastCoords: ICoords | {};
    typeRequset: string;
    trueInfo: boolean;
}

const initialState: IinitialState = {
    dataPosition: {},
    dataCity: {},
    lastCity: '',
    loadingCards: true,
    loadingForm: true,
    lastCoords: {},
    typeRequset: 'Hourly',
    trueInfo: true,
};

export const weatherReducer = (state = initialState, action: WeatherActionTypes) => {
    switch (action.type) {
        case RECORD_POSITION:
            return {
                ...state,
                dataPosition: {...action.payload}
            }
        case RECORD_LASTCITY:
            return {
                ...state,
                lastCity: action.payload,
                }
        case RECORD_CITY:
                return {
                ...state,
                dataCity: {...action.payload},
                }
        case RECORD_LASTCOORDS:
                return {
                ...state,
                lastCoords: {...action.payload},
                }
        case RECORD_TYPEREQUEST:
                return {
                ...state,
                typeRequset: action.payload,
                }
        case SHOW_LOADINGCARDS:
            return {
                ...state,
                loadingCards: true,
                }
        case HIDE_LOADINGCARDS:
                return {
                ...state,
                loadingCards: false,
                }
        case TRUE_DATA:
                return {
                ...state,
                trueInfo: true,
                }
        case FALSE_DATA:
                return {
                ...state,
                trueInfo: false,
                }
       
        case SHOW_LOADER:
                return {
                ...state,
                loadingForm: true,
                }
        case HIDE_LOADER:
                return {
                ...state,
                loadingForm: false,
                }            
        default:
            return state;
    }
}

