import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MarkdownRender from '../renderers/MarkdownRenderer';

const Reader = ({ course, unit }) => {
  // TODO check unit MD format

  const [source, setSource] = useState(null);

  useEffect(() => {
    const uri = `${course.root}${unit}`;
    fetch(uri)
    .then(res => res.text())
    .then(result => setSource(result));
  }, [unit]);

  return (
    <>
      {source && <MarkdownRender source={source} />}
    </>
  );
};

Reader.propTypes = {
  course: PropTypes.object,
  unit: PropTypes.string,
};

export default Reader;
