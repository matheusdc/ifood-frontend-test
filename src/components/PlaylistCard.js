import React from 'react';
import PropTypes from 'prop-types';

import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';

const { Meta } = Card;

const PlaylistCard = ({
  name,
  image,
  tracks,
}) => (
  <Card
    hoverable
    style={{ margin: 24 }}
    cover={<img alt={name} src={image} />}
  >
    <Meta title={name} description={`${tracks} tracks.`} />
  </Card>
);

PlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tracks: PropTypes.number.isRequired,
};

export default PlaylistCard;
