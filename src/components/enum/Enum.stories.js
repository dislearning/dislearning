import React from "react"
import Enum from './Enum';

export default {
  title: 'Tags',
};

export const Tags = () =>
  <Enum
  items={[
    {
      name: 'javaScript'
    }, {
      name: 'courses'
    }]}
  icon={'folder-open'}
  separator={' /'}>
  </Enum>;

  Enum.story = {
    name: 'Enum',
  };