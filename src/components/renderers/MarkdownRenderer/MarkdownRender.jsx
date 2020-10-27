import React from 'react';
import PropTypes from 'prop-types';

import unified from 'unified';
import markdown from 'remark-parse';
import math from 'remark-math';
import remark2rehype from 'remark-rehype';
import katex from 'rehype-katex';
import rehype2react from 'rehype-react';
import highlight from 'rehype-highlight';

import './katex/katex.scss';
import 'highlight.js/scss/monokai.scss';

import youtube from './plugins/youtube';
import './plugins/youtube.scss';

const processor = unified()
  .use(markdown)
  .use(youtube.parser)
  .use(math)
  .use(remark2rehype)
  .use(katex)
  .use(highlight)
  .use(rehype2react, { createElement: React.createElement });

const MarkdownRender = ({ source }) => {
  const vfile = processor.processSync(source);
  return vfile.result;
};

MarkdownRender.propTypes = {
  source: PropTypes.string,
};

export default MarkdownRender;
