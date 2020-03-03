import React, { useEffect } from 'react';

const withInitialize = <P extends object>(
  Component: React.ComponentType<P>,
) => (props: P) => {
  return <Component {...props} />;
};

export default withInitialize;
