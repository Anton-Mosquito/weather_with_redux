import { takeEvery, put, call } from 'redux-saga/effects'
import { IDataCity } from '../../models/dataCity.model';
import getNearbyCities from '../../services/requestNearbyCities';
import { 
    hideFormLoader, 
    recordCity,
    hideLoadingCards,
    falseData,
    trueData,
    showLoadingCards,
} from '../actions';
import { UPDATE_WEATHER_NEARBY_CARDS } from '../types';

export function* updateNearbyCardsWatcher() {
    yield takeEvery(UPDATE_WEATHER_NEARBY_CARDS, updateNearbyWorker);
}

function* updateNearbyWorker(action: any) {
    try {
        yield put(showLoadingCards());
        yield put(trueData());
        const response: IDataCity = yield call(getNearbyCities, action.payload);
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