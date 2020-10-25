import {
  Box, CircularProgress, Typography,
} from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';
import { firebaseProps } from '../../Firebase/FirebaseContext';
import { Message, messageStoreInjected } from '../../stores/MessagesStore';
import { sessionStoreInjected } from '../../stores/SessionStore';
import MessageInput from './MessageInput';
import MessageView from './MessageView';

type Props = {};
type PropsWithInjected = Props & firebaseProps & messageStoreInjected & sessionStoreInjected;

const ChatFrameBase: React.FunctionComponent<PropsWithInjected> = (props: PropsWithInjected) => {
  const messageEnd = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState(true);
  const chatUid: string = useParams < { id: string }>().id;

  const listenFirebaseMessages = (): any => {
    const { messagesStore } = props;
    return props.firebase.db.chat()('messages', chatUid).limitToLast(messagesStore.limit).on('value', (snapshot: firebase.database.DataSnapshot) => {
      setLoading(false);
      if (snapshot) messagesStore.setMessages(snapshot.val());
    });
  };

  useEffect(() => {
    const listener = listenFirebaseMessages();
    return () => listener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messageEnd?.current) messageEnd.current.scrollIntoView();
  }, [props.messagesStore.limit, props.messagesStore.messages]);

  const isSessionUserMessage = (): boolean => Math.random() > 0.5;

  const { messages } = props.messagesStore;
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  } if (messages.length === 0) {
    return <Typography align="center">Start conversation :)</Typography>;
  }
  return (
    <Box height="100%">
      <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between" overflow="scroll">
        <Box flexGrow="1">
          {Object.entries(messages).map(([id, message]: [string, Message]) => <MessageView key={id} isSessionUserMessage={isSessionUserMessage()} message={message} />)}
        </Box>

        <Box marginTop="1em"><MessageInput firebase={props.firebase} chatUid={chatUid} /></Box>
        <div ref={messageEnd} />
      </Box>

    </Box>
  );
};

const Messages = compose<PropsWithInjected, Props>(
  withFirebase,
  inject('messagesStore'),
  inject('sessionStore'),
  observer,
)(ChatFrameBase);

export default Messages;
