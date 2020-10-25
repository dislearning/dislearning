import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { StyledHeader } from './StyledHeader';
import MenuButton from '../MenuButton';

import course from '../../../data/course.json';

const Header = ({ sidebar, setSidebar }) => (
  <StyledHeader>
    <h3>
      <Link to={'/'}>
        {course.title} <small>v{course.version}</small>
      </Link>
    </h3>
    <MenuButton active={sidebar} onClick={() => setSidebar(!sidebar)} />
  </StyledHeader>
);

Header.propTypes = {
  sidebar: PropTypes.bool,
  setSidebar: PropTypes.func,
};

export default Header;
