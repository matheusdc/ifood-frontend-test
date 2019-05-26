import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import PlaylistCard from './PlaylistCard';

import { getPlaylists } from '../actions';

const Playlists = ({ playlists }) => {
  useEffect(() => {
    getPlaylists({ country: 'US' });
  }, []);

  return (
    <Row gutter={24}>
      {playlists.map(({
        id, name, images, tracks,
      }) => (
        <Col key={id} span={8}>
            <PlaylistCard
              id={id}
              name={name}
              image={images[0].url}
              tracks={tracks.total}
            />
          </Col>
      ))}
    </Row>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired,
};

const mapStateToProps = ({ playlists }) => ({
  playlists: playlists.playlists,
});

export default connect(mapStateToProps)(Playlists);
