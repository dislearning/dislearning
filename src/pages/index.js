import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import course from '../../data/course.json';

const IndexPage = () => {
  useEffect(() => {
    navigate(course.start);
  });
  return null;
};

export default IndexPage;
