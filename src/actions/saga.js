import {
  call, put, takeEvery, all, select,
} from 'redux-saga/effects';

import * as TYPES from './types';

import { getPlaylists } from '../services/SpotifyApi';
import defaultFilters from '../components/defaultFilters';

export function* workerGetPlaylists() {
  try {
    const advancedFilters = yield select(state => state.filters);

    const hasFilters = Object.keys(advancedFilters).length;
    const filters = (hasFilters) ? advancedFilters : defaultFilters();

    const { data: { playlists } } = yield call(getPlaylists, filters);
    yield put({ type: TYPES.GET_PLAYLISTS_SUCCESS, payload: playlists });
  } catch (error) {
    yield put({ type: TYPES.GET_PLAYLISTS_FAILURE });
  }
}

export function* watchGetPlaylists() {
  yield takeEvery(TYPES.GET_PLAYLISTS_REQUEST, workerGetPlaylists);
}

export function* workerSetFilters(filters) {
  yield put({ type: TYPES.SET_FILTERS, payload: filters });
  yield put({ type: TYPES.GET_PLAYLISTS_REQUEST, payload: filters });
}

export function* watchSetFilters() {
  yield takeEvery(TYPES.SET_FILTERS, workerGetPlaylists);
}

export default function* rootSaga() {
  yield all([
    watchGetPlaylists(),
    watchSetFilters(),
  ]);
}
