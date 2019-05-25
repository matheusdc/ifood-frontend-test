import React, { Component } from 'react';

import SpotifyLogin from './SpotifyLogin';

import { getTokenFromUrl } from '../services/SpotifyAuthenticationService';

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
          ? <span>Authentication sucessfull</span>
          : <SpotifyLogin />
        }
      </div>
    );
  }
}

export default SessionManager;
