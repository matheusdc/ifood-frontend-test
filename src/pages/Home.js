import React from 'react';

import Tipography from 'antd/lib/typography';
import 'antd/lib/typography/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import FeaturedPlaylistsProvider from '../components/FeaturedPlaylistsProvider';
import Playlists from '../components/Playlists';
import Filters from '../components/Filters';

const { Title } = Tipography;

const Home = () => (
  <Row type="flex" justify="center">
    <Col span={18}>
      <Title level={1}>Spotifood</Title>
      <FeaturedPlaylistsProvider>
        <Filters />
        <Playlists />
      </FeaturedPlaylistsProvider>
    </Col>
  </Row>
);

export default Home;
