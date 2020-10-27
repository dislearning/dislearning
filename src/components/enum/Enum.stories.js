import React from 'react';
import Enum from './Enum';
import { FaAdn } from 'react-icons/fa';

export default {
  title: 'Components',
};

export const EnumStory = () =>
  <Enum
    items={[{ name: 'term1' }, { name: 'term2' }]}
    Icon={FaAdn}
  />;

EnumStory.story = {
  name: 'Enum'
};
