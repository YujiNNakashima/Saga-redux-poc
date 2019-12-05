import { all, takeLatest } from 'redux-saga/effects';
import * as SearchTypes from "./search/types"
import {requestUserWithId} from './search/saga'

export default function* rootSaga() {
    yield all([
        takeLatest(SearchTypes.LOAD_REQUEST_USER, requestUserWithId)
    ])
}