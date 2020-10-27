import React from 'react';
import { navigate } from 'gatsby';
import { FiFileText } from 'react-icons/fi';

import { StyledItem } from './StyledItem';

export const Text = ({ title, slug, selected }) => (
  <StyledItem onClick={() => navigate(`/${slug}`)} selected={selected}>
    <FiFileText /> {title}
  </StyledItem>
);
