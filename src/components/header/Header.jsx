import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Categories from '../course/Categories';
import Tags from '../course/Tags';

import { StyledHeader, StyledMenu } from './HeaderStyle.js';
import Sidebar from '../sidebar/Sidebar';

const Header = ({ title, course }) => {
  const [sb, setSb] = useState(false);
  const url = course ? `/courses/${course.slug}` : '/';

  return (
    <StyledMenu>
      {course && <div className='container change' onClick={(x) => {
        x.target.classList.toggle('change');
        setSb(!sb);
      }}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>}
      <div>
        <StyledHeader>
          <div>
            <h1 style={{ margin: 0 }}>
              <Link to={url} className={'home'}>
                {title}
              </Link>
            </h1>
          </div>
        </StyledHeader>
        {course && sb && <Sidebar course={course} />}
      </div>
    </StyledMenu>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  course: PropTypes.object,
};

Header.defaultProps = {
  title: '',
};

export default Header;
