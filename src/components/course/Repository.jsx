import PropTypes from 'prop-types';
import React from 'react';
import { FaGit } from 'react-icons/fa';

const Repository = ({ url }) => (
  <a href={url} target={'_blank'} rel={'noreferrer noopener'}>
    <FaGit />&nbsp;
    {url}
  </a>
);

Repository.propTypes = {
  url: PropTypes.string,
};

Repository.defaultProps = {
  url: '',
};

export default Repository;
