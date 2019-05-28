import React from 'react';
import PropTypes from 'prop-types';

import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';

const { Meta } = Card;

const PlaylistCard = ({
  name,
  image,
  tracks,
  link,
}) => (
  <a href={link}>
    <Card
      hoverable
      style={{ marginTop: 24 }}
      cover={<img alt={name} src={image} />}
    >
      <Meta title={name} description={`${tracks} tracks.`} />
    </Card>
  </a>
);

PlaylistCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tracks: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default PlaylistCard;
