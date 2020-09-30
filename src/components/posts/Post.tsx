import React from 'react';
import {
  Card, CardContent, Typography, CardActions, IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import style from './style';

export default (props: PostProps) => {
  const { isLiked } = props;
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography style={style.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          nev
          o
          lent
        </Typography>
        <Typography style={style.pos} color="textSecondary">
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
