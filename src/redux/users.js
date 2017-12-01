import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { OrderedMap, Map } from 'immutable';

const ajax = axios.create({
    baseURL: 'http://localhost:8080'
});

export const USERS_FETCH = 'USERS_FETCH';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_FAIL = 'USERS_FETCH_FAIL';

function* fetchUsersEffect(action) {
    try {
        const resp = yield call(ajax.get, '/users');
        yield put({ type: 'USERS_FETCH_SUCCESS', payload: resp.data });
    } catch (e) {
        yield put({ type: 'USERS_FETCH_FAIL', payload: e.message });
    }
}

export function* usersSaga() {
    yield takeLatest('USERS_FETCH', fetchUsersEffect);
}

export default (state = OrderedMap(), { type, payload }) => {
    switch (type) {
        case USERS_FETCH_SUCCESS:
            return state.merge(Map(payload));
        default:
            return state;
    }
}

