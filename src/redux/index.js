import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import users, { createSagas } from './users';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        users
    }),
    applyMiddleware(sagaMiddleware)
);

// then run the saga
export const api = axios.create({
    baseURL: 'http://localhost:8080'
});

sagaMiddleware.run(createSagas(api).all);

export default store;
