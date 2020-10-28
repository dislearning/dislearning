import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { FiFileText } from 'react-icons/fi';

import { StyledItem } from './StyledItem';

export const Text = ({ title, slug, selected }) => (
  <StyledItem onClick={() => navigate(`/${slug}`)} selected={selected}>
    <FiFileText /> {title}
  </StyledItem>
);

Text.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  selected: PropTypes.bool,
};
