import React from 'react';

import { StyledFooter } from './StyledFooter';

const Footer = () => (
  <StyledFooter>
    <div>
      Powered by{' '}
      <a
        href={'https://github.com/dislearning'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        DisLearning
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
