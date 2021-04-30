import { takeEvery, put, call, ForkEffect } from 'redux-saga/effects'
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
    hideLoadingCards
} from '../actions';
import { REQUEST_WEATHER } from '../types';

export function* sagaWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery(REQUEST_WEATHER, sagaWorker);
}

function* sagaWorker(action: any) {
    try {
        yield put(showFormLoader());
        const position: IDataPosition = yield call(getWeather, action.payload);
        if (position.cod === 200) {
            yield put(recordDataPosition(position));
            yield put(hideFormLoader());
            yield put(recordLastCity(position.name));
            const city: IDataCity = yield call(getWet, position.name);
            yield put(recordCity(city));
            yield put(hideLoadingCards());
        } else {
            console.log('Error');
        }
    } catch (error) {
        yield console.log('Error behind promise!', error.message)
    }
}

