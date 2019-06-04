import { useEffect } from 'react';

import { PLAYLIST_POLLING } from '../../constants';

import { getPlaylists } from '../../actions';

const usePlaylistPolling = (delay = PLAYLIST_POLLING) => {
  useEffect(() => {
    getPlaylists();

    if (delay !== null) {
      const id = setInterval(getPlaylists, delay);
      return () => clearInterval(id);
    }

    return null;
  }, [delay]);
};

export default usePlaylistPolling;
