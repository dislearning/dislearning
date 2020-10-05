import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import {StyledCourse, StyledTitle} from './courseStyle';

const Course = (props) => (
  <StyledCourse>
    <Link to={`/courses/${props.slug}`}>
      <img src={props.image} />
    </Link>
    <StyledTitle>
      <Link to={`/courses/${props.slug}`}>
        <h3>{props.title}</h3>
      </Link>
    </StyledTitle>
  </StyledCourse>
);

Course.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  categories: PropTypes.array
};

Course.defaultProps = {
  title: '',
  categories: []
};

export default Course;
