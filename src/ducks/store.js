import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import todos from './search/reducers'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        todos,
    }), 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

sagaMiddleware.run(rootSaga) 

export default store