import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import {StyledLayout, StyledMain} from './LayoutStyle.js';

import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children, course }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const detail = data.site.siteMetadata;
  const title = course ? course.title : detail.title;

  return (
    <StyledLayout course={course}>
      <Header title={title} course={course} />
      <StyledMain>
        {children}
      </StyledMain>
      {course && <Footer/>}
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  course: PropTypes.object
};

Layout.defaultProps = {
  course: null
};

export default Layout;
