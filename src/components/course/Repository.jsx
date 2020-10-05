import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../icon/Icon';

const Repository = ({ url }) => (
  <a href={url} target={'_blank'}>
    <Icon id={'git'} />&nbsp;
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
