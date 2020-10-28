import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Components',
};

export const SidebarStory = () => <Sidebar location={{ pathname: 'test' }} />;

SidebarStory.story = {
  name: 'Sidebar',
};
