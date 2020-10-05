import React from 'react';

import Respository from './Repository';

export default {
  title: 'Course',
};

export const repository = () =>
  <Respository url={'https://github.com/gatsbyjs/gatsby'} />;

repository.story = {
  name: 'Repository',
};
