import React from 'react';

import injectSheet from 'react-jss';

const styles = {
  h3: {
    color: 'pink'
  }
};

const H3 = ({classes, children}) => {
  return (
    <h3 className={classes.h3}>
      {children}
    </h3>
  );
}

export default injectSheet(styles)(H3);
