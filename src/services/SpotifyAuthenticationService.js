import qs from 'qs';

import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
} from '../constants';

export const getTokenFromUrl = () => {
  const authCredentials = qs.parse(window.location.hash.substr(1));
  const token = authCredentials.access_token || null;
  sessionStorage.setItem('token', token);

  window.location.hash = '';

  return token;
};

export const getAuthUrl = () => `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
