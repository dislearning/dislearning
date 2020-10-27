import React from 'react';
import Course from './Course';

import img from './__stories__/img.png';

export default {
  title: 'Components',
};

export const CourseStory = () => <Course title={'Course 1'} image={img} />;

CourseStory.story = {
  name: 'Course',
};
