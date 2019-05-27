import React, { useEffect, useState } from 'react';

import SpotifyLogin from './SpotifyLogin';

import { getTokenFromUrl } from '../services/SpotifyAuthenticationService';
import Home from '../pages/Home';

const SessionManager = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getTokenFromUrl());
  }, []);

  const isAuthenticated = () => token !== null;

  return (
    <div>
      {isAuthenticated()
        ? <Home />
        : <SpotifyLogin />
      }
    </div>
  );
};

export default SessionManager;
