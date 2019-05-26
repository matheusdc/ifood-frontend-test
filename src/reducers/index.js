import { combineReducers } from 'redux';

import filters from './filters';
import playlists from './playlists';

export default combineReducers({
  filters,
  playlists,
});
