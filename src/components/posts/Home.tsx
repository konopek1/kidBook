import React from 'react';
import { Box } from '@material-ui/core';
import PostAgregator from './PostsAgregator';

export default class Home extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Box width="100%">
        <PostAgregator />
      </Box>
    );
  }
}
