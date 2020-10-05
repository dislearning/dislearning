import React from 'react';

import MarkdownRender from './MarkdownRender';
import md from '!!raw-loader!./mocks/demo.md';

export default {
  title: 'Renderers',
};

export const markdownRender = () =>
  <MarkdownRender source={md} />;

markdownRender.story = {
  name: 'MarkdownRender',
};
