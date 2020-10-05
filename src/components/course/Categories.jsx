import PropTypes from 'prop-types';
import React from 'react';

import Enum from '../enum/Enum';

const mapItem = (item) => ({
  name: item,
  url: `/?categories=${item}`
});

const Categories = ({ items }) => (
  <Enum
    items={items.map(mapItem)}
    icon={'folder-open'}
    separator={' /'}
  />
);

Categories.propTypes = {
  items: PropTypes.array,
};

Categories.defaultProps = {
  items: [],
};

export default Categories;
