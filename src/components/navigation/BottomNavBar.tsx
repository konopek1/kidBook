import {
  BottomNavigation, BottomNavigationAction, makeStyles, Box, Divider,
} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#a2d5f2',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default () => {
  const style = useStyles();
  const history = useHistory();

  return (
    <Box width="100%" position="fixed" bottom="0">
      <BottomNavigation className={style.navbar} onChange={(_, value) => history.push(value)}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} value="/home" />
        <Divider orientation="vertical" />
        <BottomNavigationAction label="Chat" icon={<ChatIcon />} value="/chat" />
      </BottomNavigation>
    </Box>
  );
};
