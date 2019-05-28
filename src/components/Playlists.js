import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style/css';

import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

import PlaylistCard from './PlaylistCard';

import { getPlaylists } from '../actions';

const Playlists = ({
  playlists, keyword, loading, error,
}) => {
  useEffect(() => {
    getPlaylists();
  }, []);

  const filterPlaylistByKeyword = playlist => playlist.name.toLocaleLowerCase().includes(keyword);

  return (
    <Spin tip="Carregando..." spinning={loading} style={{ height: 150 }}>
      {error && (
        <Alert
          style={{ marginTop: 48 }}
          message="Ops... Algo deu errado"
          description="Estamos enfrentando problemas técnicos, por favor tente novamente mais tarde."
          type="error"
          showIcon
        />
      )}
      <Row gutter={24}>
        {playlists.filter(filterPlaylistByKeyword).map(({
          id, name, images, tracks, external_urls: externalUrls,
        }) => (
          <Col key={id} xs={24} xl={8}>
              <PlaylistCard
                id={id}
                name={name}
                image={images[0].url}
                tracks={tracks.total}
                link={externalUrls.spotify}
              />
            </Col>
        ))}
      </Row>
    </Spin>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ playlists, filters }) => ({
  playlists: playlists.playlists,
  error: playlists.error,
  loading: playlists.loading,
  keyword: filters.keyword,
});

export default connect(mapStateToProps)(Playlists);
