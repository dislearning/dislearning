import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Courses from '../components/list/courses/Courses';

const IndexPage = ({ data }) => {
  return (
  <Layout>
    <SEO title="Courses" />
    <Courses courses={data.allCourse.edges.map(x => x.node)} />
  </Layout>
);};

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;

export const query = graphql`
  query {
    allCourse {
      edges {
        node {
          slug
          title
          level
          categories
          tags
          stars
          image
        }
      }
    }
  }
`;
