import React from 'react';

import SpotifyLogin from '../components/SpotifyLoginButton/SpotifyLogin';
import './Login.css';

const Login = () => (
  <section className="login-container">
    <header className="login-container__title">
      Spotifood
    </header>
    <p className="login-container__description">
      Encontre as melhores playlists para aproveitar sua refeição!
    </p>
    <SpotifyLogin />
  </section>
);

export default Login;
