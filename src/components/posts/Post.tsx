import React from 'react';
import {
  Card, CardContent, Typography, CardActions, makeStyles, IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default (props: PostProps) => {
  const classes = useStyles();
  const { isLiked } = props;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          nev
          o
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          asfafdfe
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>{isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
      </CardActions>
    </Card>
  );
};

export interface PostProps {
  isLiked?: boolean;
}
