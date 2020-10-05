import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledEnum, StyledItems } from './EnumStyle.js';

const Enum = ({ items, Icon, separator }) => (
  <StyledEnum>
    {Icon && <Icon />}
    <StyledItems>
      {items.map((item, idx) => (
        <li key={idx}>
          <Link to={item.url}>
            {item.name}
          </Link>
          {idx !== items.length - 1 ? separator : ''}
        </li>
      ))}
    </StyledItems>
  </StyledEnum>
);

Enum.propTypes = {
  items: PropTypes.array,
  Icon: PropTypes.node,
  separator: PropTypes.string,
};

Enum.defaultProps = {
  items: [],
  Icon: null,
  separator: ','
};

export default Enum;
