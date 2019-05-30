import React, { useEffect, useState } from 'react';

import { getTokenFromUrl } from '../services/SpotifyAuthenticationService';

import Home from '../pages/Home';
import Login from '../pages/Login';

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
        : <Login />
      }
    </div>
  );
};

export default SessionManager;
