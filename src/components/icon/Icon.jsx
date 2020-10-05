import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
  display: inline-block;
`;

const Icon = ({ id }) => (
  <StyledIcon>
    <i className={`icon-${id}`} />
  </StyledIcon>
);

Icon.propTypes = {
  id: PropTypes.string,
};

Icon.defaultProps = {
  id: '',
};

export default Icon;
