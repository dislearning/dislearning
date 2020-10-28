import React from 'react';
import PropTypes from 'prop-types';
import { FiFolder } from 'react-icons/fi';

import { StyledItem } from './StyledItem';

export const Section = ({ title }) => (
  <StyledItem bg={'#eeeeff'}>
    <FiFolder /> {title}
  </StyledItem>
);

Section.propTypes = {
  title: PropTypes.string,
};
