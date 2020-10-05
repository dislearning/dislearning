import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  border-right: 1px rgba(103, 52, 148, .1) solid;
  width: 16rem;
  padding: .6rem 1rem;
`;

const getNode = (node, course) => {
  return (
    <li key={node.slug}>
      <Link to={`/courses/${course.slug}?unit=${node.path}`}>
        {node.title}
      </Link>
      {node.units && (
        <ul>
          {node.units.map(childNode => getNode(childNode, course))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ course }) => {
   return <StyledSidebar>
    <p>
      <Link to={`/courses/${course.slug}`}>
        Course Description
      </Link>
    </p>

    TOC
    <ul>
      {JSON.parse(course.toc).map(rootNode => getNode(rootNode, course))}
    </ul>
  </StyledSidebar>
};

Sidebar.propTypes = {
  course: PropTypes.object,
};

Sidebar.defaultProps = {
  course: {},
};

export default Sidebar;
