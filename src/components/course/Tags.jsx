import PropTypes from 'prop-types';
import React from 'react';

import Enum from '../enum/Enum';

const mapItem = (item) => ({
  name: item,
  url: `/?tags=${item}`
});

const Tags = ({ items }) => (
  <Enum
    items={items.map(mapItem)}
    icon={'tags'}
  />
);

Tags.propTypes = {
  items: PropTypes.array,
};

Tags.defaultProps = {
  items: [],
};

export default Tags;
