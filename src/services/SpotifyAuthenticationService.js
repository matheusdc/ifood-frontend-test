import qs from 'qs';

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '97171a26d01b437680f71fd7a67a0af4';
const REDIRECT_URI = 'http://localhost:3000';

export const getTokenFromUrl = () => {
  const authCredentials = qs.parse(window.location.hash.substr(1));
  const token = authCredentials.access_token || null;
  sessionStorage.setItem('token', token);

  window.location.hash = '';

  return token;
};

export const getAuthUrl = () => `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;

export default {
  getTokenFromUrl,
  getAuthUrl,
};
