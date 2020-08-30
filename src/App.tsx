import React, { ReactNode } from 'react';
import { Button } from '@material-ui/core';

export default class App extends React.Component<{},{}> {

  render(): ReactNode {
    return (<Button variant="contained" color="primary">Przycisk</Button>);
  };

}