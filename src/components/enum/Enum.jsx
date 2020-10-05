import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../icon/Icon';
import {StyledEnum, StyledItems} from './EnumStyle.js'

const Enum = ({ items, icon, separator }) => (
  <StyledEnum>
    {icon && <><Icon id={icon} />&nbsp;</>}
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
  icon: PropTypes.string,
  separator: PropTypes.string,
};

Enum.defaultProps = {
  items: [],
  icon: null,
  separator: ','
};

export default Enum;
