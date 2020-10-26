import React from 'react';

import { StyledSidebar } from './StyledSidebar';
import withLocation from '../hoc/withLocation';

import course from '../../../data/course.json';

import { Section, Text } from './nodes';

const types = {
  section: Section,
  text: Text,
};

const getNode = (node, selected) => {
  const Item = types[node.type];
  return (
    <li key={node.slug || node.title}>
      <Item {...node} selected={`/${node.slug}` === selected} />
      {node.children && (
        <ul>{node.children.map((child) => getNode(child, selected))}</ul>
      )}
    </li>
  );
};

const Sidebar = ({ location }) => (
  <StyledSidebar>
    <ul>
      {course.toc.map((rootNode) => getNode(rootNode, location.pathname))}
    </ul>
  </StyledSidebar>
);

export default withLocation(Sidebar);
