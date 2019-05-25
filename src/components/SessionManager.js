import React, { Component } from 'react';

import SpotifyLogin from './SpotifyLogin';

import { getTokenFromUrl } from '../services/SpotifyAuthenticationService';
import Home from '../pages/Home';

class SessionManager extends Component {
  state = {
    token: null,
  }

  componentDidMount() {
    const token = getTokenFromUrl();
    this.setState({ token });
  }

  isAuthenticated = () => {
    const { token } = this.state;
    return token !== null;
  };

  render() {
    return (
      <div>
        {this.isAuthenticated()
          ? <Home />
          : <SpotifyLogin />
        }
      </div>
    );
  }
}

export default SessionManager;
