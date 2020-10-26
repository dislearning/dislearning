import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

import { StyledLayout } from './StyledLayout';

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <StyledLayout>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <main>{children}</main>
      {sidebar && <Sidebar />}
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
