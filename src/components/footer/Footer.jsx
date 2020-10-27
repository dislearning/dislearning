import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import {StyledFooter} from './FooterStyle.js';

const Footer = ({ title }) => (
  <StyledFooter>
    <Link to={'/'}>Back to Home</Link>
    <p>{title}</p>
    <h3>DisLearning</h3>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: '',
};

export default Footer;
