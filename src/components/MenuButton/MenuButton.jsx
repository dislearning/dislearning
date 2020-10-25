import React from 'react';
import PropTypes from 'prop-types';

import { StyledMenuButton } from './StyledMenuButton';

const MenuButton = ({ active, onClick }) => (
  <StyledMenuButton active={active} onClick={onClick}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </StyledMenuButton>
);

MenuButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuButton;
