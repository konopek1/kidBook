import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Message } from '../../stores/MessagesStore';
import style from './style';

const Caption: React.FC<Omit<MessageViewProps, 'content'>> = (props: Omit<MessageViewProps, 'content'>) => {
  const time = new Date(props.message.timestamp).toLocaleTimeString();
  const date = new Date(props.message.timestamp).toLocaleDateString();
  return (
    <Box style={style.captionMessageWrapper(props.isSessionUserMessage)}>
      <Typography style={style.captionMessage(props.isSessionUserMessage)} variant="caption">
        {time}
        {' '}
        {date}
        {' '}
        {props.message.author}
      </Typography>
    </Box>
  );
};

const MessageView: React.FC<MessageViewProps> = (props: MessageViewProps) => (
  <Box>
    <Paper style={style.paperMessage(props.isSessionUserMessage)}>
      <Typography style={style.contentMessage(props.isSessionUserMessage)}>{props.message.content}</Typography>
    </Paper>
    <Caption message={props.message} isSessionUserMessage={props.isSessionUserMessage} />
  </Box>
);

type MessageViewProps = {
    message: Message;
} & {
    isSessionUserMessage: boolean;
};

export default MessageView;
