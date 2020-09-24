import React from 'react';
import { Box } from '@material-ui/core';
import Post from './Post';

export default class PostAgregator extends React.PureComponent {
  render() {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" marginBottom="20%">
        {[1, 2, 3].map(() => <Box marginTop="3rem" width="85%"><Post /></Box>)}
      </Box>
    );
  }
}
