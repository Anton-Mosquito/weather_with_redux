import { takeEvery, put, call, ForkEffect } from 'redux-saga/effects'
import { IDataCity } from '../../models/dataCity.model';
import getWet from '../../services/requestWeatherByCity';
import { 
    hideFormLoader, 
    recordCity,
    hideLoadingCards,
    falseData,
    trueData,
    showLoadingCards,
} from '../actions';
import { UPDATE_WEATHER_CITY_CARDS } from '../types';

export function* updateCityCardsWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery(UPDATE_WEATHER_CITY_CARDS, updateCityWorker);
}

function* updateCityWorker(action: any) {
    try {
        yield put(showLoadingCards());
        yield put(trueData());
        const response: IDataCity = yield call(getWet, action.payload);
        if (response.cod === String(200)) {
            yield put(recordCity(response));
            yield put(hideLoadingCards());  
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