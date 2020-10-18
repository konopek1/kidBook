import {
  Box, Paper, InputBase, Divider, IconButton,
} from '@material-ui/core';
import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/SendRounded';
import Firebase from '../../Firebase';
import { Message } from '../../stores/MessagesStore';
import { InputEvent } from '../login/SignInForm';
import style from './style';

type MessageInputProps = {firebase: Firebase, chatUid: string};

const MessageInput: React.FC<MessageInputProps> = (props: MessageInputProps) => {
  const [value, setValue] = useState('');
  const { db } = props.firebase;

  const sendMessage = () => {
    const payload = value.trim();
    if (payload === '') return;

    const message: Message = {
      author: 'user1',
      content: payload,
      timestamp: (new Date()).getTime(),
    };

    db.chat()('messages', props.chatUid).push(message);

    // Reset input
    setValue('');
  };

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    sendMessage();
    e.preventDefault();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
      e.preventDefault();
    }
  };

  return (
    <Box>
      <Paper component="form" style={style.form} onSubmit={onSubmit}>
        <InputBase
          placeholder="Type message ..."
          multiline
          style={style.form.input}
          value={value}
          onChange={(e: InputEvent) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Divider orientation="vertical" />
        <IconButton type="submit" aria-label="search">
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default MessageInput;
