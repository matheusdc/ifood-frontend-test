import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import { getPlaylists } from '../services/SpotifyApi';

export const FeaturedPlaylistContext = createContext();

class FeaturedPlaylistsProvider extends Component {
  state = {
    playlists: [],
  }

  componentDidMount() {
    this.updatePlaylists();
  }

  updatePlaylists = async (params) => {
    const { data } = await getPlaylists(params);
    this.setState({ playlists: data.playlists.items });
  }

  render() {
    const { playlists } = this.state;
    const { children } = this.props;
    const { updatePlaylists } = this;

    return (
      <FeaturedPlaylistContext.Provider value={{ playlists, updatePlaylists }}>
        {children}
      </FeaturedPlaylistContext.Provider>
    );
  }
}

FeaturedPlaylistsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeaturedPlaylistsProvider;
