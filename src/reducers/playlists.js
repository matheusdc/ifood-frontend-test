import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  error: false,
  playlists: [],
};

const playlists = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.GET_PLAYLISTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case TYPES.GET_PLAYLISTS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        playlists: [],
      };
    case TYPES.GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        playlists: payload.items,
      };
    default:
      return state;
  }
};

export default playlists;
