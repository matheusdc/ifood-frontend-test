import axios from 'axios';

const BASE_URL = 'https://api.spotify.com';

const SpotifyApi = axios.create({
  baseURL: BASE_URL,
});

const authorizationSetup = (config) => {
  const token = sessionStorage.getItem('token');

  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return {
    ...config,
    ...headers,
  };
};

export const getPlaylists = (params) => {
  const defaultParams = {
    locale: 'en_US',
    country: 'US',
  };

  return SpotifyApi.get('/v1/browse/featured-playlists', { params: { ...defaultParams, ...params } });
};

SpotifyApi.interceptors.request.use(authorizationSetup);

export default SpotifyApi;
