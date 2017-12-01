import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import users, { usersSaga } from './users';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ users }),
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(usersSaga);

export default store;
