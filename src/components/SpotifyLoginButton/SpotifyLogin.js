import React from 'react';
import spotifyLogo from './spotifyLogo.png';
import './SpotifyLogin.css';

import { getAuthUrl } from '../../services/SpotifyAuthenticationService';

const SpotifyLogin = () => (
  <a tabstop="1" className="spotify-login" href={getAuthUrl()}>
    <span aria-label="Entre com Spotify">Entre com </span>
    <img className="spotify-login__logo" src={spotifyLogo} alt="Spotify Logo" />
  </a>
);

export default SpotifyLogin;
