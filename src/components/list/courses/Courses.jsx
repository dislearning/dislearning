import PropTypes from 'prop-types';
import React from 'react';

import Course from '../course/Course';
import { StyledCourses } from './CoursesStyle';

const Courses = ({ courses }) => (
  <StyledCourses>
    {courses.map((course) => (
      <Course key={course.slug} {...course} />
    ))}
  </StyledCourses>
);

Courses.propTypes = {
  courses: PropTypes.array,
};

Courses.defaultProps = {
  courses: [],
};

export default Courses;
