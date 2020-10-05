import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
};
const course = {
    'url': 'https://raw.githubusercontent.com/trigoporres/disCourses/master/JavaScript/course.json',
    'root': 'https://raw.githubusercontent.com/trigoporres/disCourses/master/JavaScript/',
    'slug': 'JavaScript',
    'title': 'JavaScript para principiantes',
    'level': 'initial',
    'categories': [
      'Programming',
      'Languages',
      'JavaScript',
      'initial'
    ],
    'tags': [
      'initial',
      'Language'
    ],
    'stars': 0,
    'repository': 'https://github.com/trigoporres/disCourses.git',
    'image': 'https://raw.githubusercontent.com/trigoporres/disCourses/master/JavaScript/javaScript.png',
    'toc': '[{\'slug\':\'introduction\',\'title\':\'Qué es JavaScript\',\'path\':\'units/introduction.md\',\'type\':\'doc\'}]'
  };

export const sidebar = () => <Sidebar course={course} />;

Sidebar.story = {
  name: 'Sidebar',
};