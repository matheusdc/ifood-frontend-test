import {
  call, put, takeEvery, all,
} from 'redux-saga/effects';

import * as TYPES from './types';

import { getPlaylists } from '../services/SpotifyApi';

export function* workerGetPlaylists(params) {
  try {
    const { data: { playlists } } = yield call(getPlaylists, params.payload);
    yield put({ type: TYPES.GET_PLAYLISTS_SUCCESS, payload: playlists });
  } catch (error) {
    yield put({ type: TYPES.GET_PLAYLISTS_FAILURE });
  }
}

export function* watchGetPlaylists() {
  yield takeEvery(TYPES.GET_PLAYLISTS_REQUEST, workerGetPlaylists);
}

export default function* rootSaga() {
  yield all([
    watchGetPlaylists(),
  ]);
}
