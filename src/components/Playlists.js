import React, { useContext } from 'react';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import PlaylistCard from './PlaylistCard';

import { FeaturedPlaylistContext } from './FeaturedPlaylistsProvider';

const Playlists = () => {
  const { playlists } = useContext(FeaturedPlaylistContext);

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

export default Playlists;
