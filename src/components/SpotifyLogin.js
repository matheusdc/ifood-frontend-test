import React from 'react';
import { getAuthUrl } from '../services/SpotifyAuthenticationService';

const SpotifyLogin = () => (
  <div>
    <a href={getAuthUrl()}>
      Login on Spotify
    </a>
  </div>
);

export default SpotifyLogin;
