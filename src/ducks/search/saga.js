import { call, put } from 'redux-saga/effects';
import * as actions from './actions';

export function* requestUserWithId(action) {
    const id = action.id

    try {
        const user = yield call(`https://jsonplaceholder.typicode.com/users/${id}`)
        yield put(actions.requestUserSuccess(user))

    } catch(err) {
        yield put(actions.errorUser())
    }
}