import React from 'react';

import MarkdownRender from './MarkdownRender';

import defaultMd from './__stories__/default.md';
import codeMd from './__stories__/code.md';
import mathMd from './__stories__/math.md';

export default {
  title: 'Renderers / Markdown',
};

export const Default = () => <MarkdownRender source={defaultMd} />;
export const Code = () => <MarkdownRender source={codeMd} />;
export const Math = () => <MarkdownRender source={mathMd} />;

