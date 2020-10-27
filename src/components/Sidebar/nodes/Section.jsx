import React from 'react';
import { FiFolder } from 'react-icons/fi';

import { StyledItem } from './StyledItem';

export const Section = ({ title }) => (
  <StyledItem bg={'#eeeeff'}>
    <FiFolder /> {title}
  </StyledItem>
);
