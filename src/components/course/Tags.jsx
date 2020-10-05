import PropTypes from 'prop-types';
import React from 'react';
import { FaTags } from 'react-icons/fa';

import Enum from '../enum/Enum';

const mapItem = (item) => ({
  name: item,
  url: `/?tags=${item}`
});

const Tags = ({ items }) => (
  <Enum
    items={items.map(mapItem)}
    Icon={FaTags}
  />
);

Tags.propTypes = {
  items: PropTypes.array,
};

Tags.defaultProps = {
  items: [],
};

export default Tags;
