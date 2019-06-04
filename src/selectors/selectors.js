import { createSelector } from 'reselect';

export const PlaylistsSelectors = state => state.playlists.playlists;
export const FilterSelectors = state => state.filters;

export const playlistsFilterSelector = createSelector(
  PlaylistsSelectors,
  FilterSelectors,
  (playlists, filters) => (
    playlists.filter(playlist => (playlist.name.toLocaleLowerCase().includes(filters.keyword)))
  ),
);
