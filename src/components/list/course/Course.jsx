import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { StyledCourse, StyledTitle } from './courseStyle';

const StyledImage = styled.div`
  background-image: url(${(props) => props.background});
  width: 100%;
  height: 300px;
  background-size: cover;
`;

const Course = (props) => (
  <StyledCourse>
    <Link to={`/courses/${props.slug}`}>
      <StyledImage background={props.image} />
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
