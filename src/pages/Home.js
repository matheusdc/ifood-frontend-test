import React from 'react';

import Tipography from 'antd/lib/typography';
import 'antd/lib/typography/style/css';

import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

import Row from 'antd/lib/row';
import 'antd/lib/row/style/css';

import Playlists from '../components/Playlists';
import Filters from '../components/Filters';

const { Title } = Tipography;

const Home = () => (
  <Row type="flex" justify="center">
    <Col xs={22} xl={18}>
      <Title style={{ marginTop: 48, fontSize: '3.7rem' }}>Spotifood</Title>
      <div>
        <Filters />
        <Playlists />
      </div>
    </Col>
  </Row>
);

export default Home;
