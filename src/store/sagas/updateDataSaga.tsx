import { takeEvery, put, call } from 'redux-saga/effects'
import { ICoords } from '../../models/coords.model';
import { IDataCity } from '../../models/dataCity.model';
import IDataPosition from '../../models/dataPosition.model';
import getWeather from '../../services/requestCurrentWeather';
import getWet from '../../services/requestWeatherByCity';
import { 
    showFormLoader,
    recordDataPosition,
    hideFormLoader, 
    recordLastCity,
    recordCity,
    hideLoadingCards,
    showLoadingCards,
    recordLastCoords,
    trueData,
    falseData
} from '../actions';
import { UPDATED_DATA } from '../types';

export function* updateDataWatcher() {
    yield takeEvery(UPDATED_DATA, updateWorker);
}

function* updateWorker(action: any) {
    try {
        yield put(showLoadingCards());
        yield put(showFormLoader()); 
        const response: IDataCity = yield call(getWet, action.payload);
        if (response.cod === String(200)) {
            const updatedCoords: ICoords = response.city.coord;
            yield put(recordLastCoords(updatedCoords));
            yield put(recordLastCity(response.city.name));
            const city: IDataPosition = yield call(getWeather, updatedCoords);
            yield put(trueData());
            yield put(recordDataPosition(city));
            yield put(hideLoadingCards());
            yield put(hideFormLoader()); 
            yield put(recordCity(response));
        } else {
            yield put(hideLoadingCards());
            yield put(hideFormLoader());
            yield put(falseData());
            console.log('Error');
        }
    } catch (error) {
        yield console.log('Error behind promise!', error.message)
    }
}