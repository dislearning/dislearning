import React from 'react';
import PropTypes from 'prop-types';

import withLocation from '../hoc/withLocation';
import Categories from './Categories';
import Tags from './Tags';
import Repository from './Repository';
import Reader from './Reader';

const Content = ({ search, course }) => {
  const { unit } = search;
  return unit ? (
    <Reader course={course} unit={unit} />
  ) : (
    <>
      <img src={course.image} />
      <Categories items={course.categories} />
      <Tags items={course.tags} />
      <Repository url={course.repository} />
    </>
  );
};

Content.propTypes = {
  search: PropTypes.object,
  course: PropTypes.object,
  location: PropTypes.object,
  search: PropTypes.object,
};

export default withLocation(Content);