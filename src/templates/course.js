import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Content from '../components/course/Content';

const CoursePage = ({ data }) => {
  const detail = data.allCourse.edges[0].node;
  return (
    <Layout course={detail} data={data}>
      <SEO title={detail.title} />
      <Content course={detail} />
    </Layout>
  );
};

CoursePage.propTypes = {
  data: PropTypes.object
};

export default CoursePage;

export const query = graphql`
  query($slug: String!) {
    allCourse(filter: { slug: { eq: $slug } } ) {
      edges {
        node {
          url
          root
          slug
          title
          level
          categories
          tags
          stars
          repository
          image,
          toc
        }
      }
    }
  }
`;
