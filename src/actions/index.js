import store from '../store';
import * as TYPES from './types';

export const action = (type, payload) => store.dispatch({ type, payload });

export const getPlaylists = params => action(TYPES.GET_PLAYLISTS_REQUEST, params);

export const setFilters = params => action(TYPES.SET_FILTERS, params);
export const getFilters = () => action(TYPES.GET_FILTERS);
