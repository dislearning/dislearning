import React from 'react';

import Respository from './Repository';

export default {
  title: 'Components',
};

export const RepositoryStory = () =>
  <Respository url={'https://github.com/gatsbyjs/gatsby'} />;

RepositoryStory.story = {
  name: 'Repository',
};
