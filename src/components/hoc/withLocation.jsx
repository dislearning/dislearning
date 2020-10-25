import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const withLocation = (Cmp) => {
  const Wrapper = (props) => (
    <Location>
      {({ location, navigate }) => (
        <Cmp
          {...props}
          location={location}
          navigate={navigate}
          search={location.search ? queryString.parse(location.search) : {}}
        />
      )}
    </Location>
  );
  return Wrapper;
};

export default withLocation;
