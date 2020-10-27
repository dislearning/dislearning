import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-solarizedlight.css';
import { StyledUnit } from './StyledUnit';

const CoursePage = ({ data: { course } }) => {
  return (
    <Layout title={course.frontmatter.title}>
      <SEO title={course.frontmatter.title} />
      <StyledUnit>
        <div dangerouslySetInnerHTML={{ __html: course.html }} />
      </StyledUnit>
    </Layout>
  );
};

CoursePage.propTypes = {
  data: PropTypes.object,
};

export default CoursePage;

export const query = graphql`
  query($slug: String!) {
    course: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
