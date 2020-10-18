import {
  Box, CircularProgress, Typography,
} from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';
import { firebaseProps } from '../../Firebase/FirebaseContext';
import { Message, messageStoreInjected } from '../../stores/MessagesStore';
import { sessionStoreInjected } from '../../stores/SessionStore';
import MessageInput from './MessageInput';
import MessageView from './MessageView';

type Props = {
  chatUid: string
};

type PropsWithInjected = Props & firebaseProps & messageStoreInjected & sessionStoreInjected;

type State = {
  isLoading: boolean,
};

class MessagesBase extends React.Component<PropsWithInjected, State> {
  private messageEnd: HTMLDivElement | null = null;

  constructor(props: PropsWithInjected) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.listenFirebaseMessages();
  }

  componentDidUpdate() {
    if (this.messageEnd) this.messageEnd.scrollIntoView();
  }

  componentWillUnmount() {
    this.props.firebase.db.chat()('messages').off();
  }

  // TODO doesnt work
  onScroll = (e: any) => {
    // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    // if (bottom) { this.props.messagesStore.setLimit(this.props.messagesStore.limit + 5); }
  };

  listenFirebaseMessages() {
    const { chatUid, messagesStore } = this.props;

    this.props.firebase.db.chat()('messages', chatUid).limitToLast(messagesStore.limit).on('value', (snapshot: firebase.database.DataSnapshot) => {
      this.setState({ isLoading: false });
      messagesStore.setMessages(snapshot.val());
    });
  }

  // eslint-disable-next-line class-methods-use-this
  isSessionUserMessage(): boolean {
    return Math.random() > 0.5;
  }

  render() {
    const { messages } = this.props.messagesStore;
    if (this.state.isLoading) {
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
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between" overflow="scroll" onScroll={this.onScroll}>
          <Box>
            {Object.entries(messages).map(([id, message]: [string, Message]) => <MessageView key={id} isSessionUserMessage={this.isSessionUserMessage()} message={message} />)}
          </Box>

          <Box marginTop="1em"><MessageInput firebase={this.props.firebase} chatUid={this.props.chatUid} /></Box>
          <div
            ref={(el) => { this.messageEnd = el; }}
          />
        </Box>

      </Box>
    );
  }
}

const Messages = compose<PropsWithInjected, Props>(
  withFirebase,
  inject('messagesStore'),
  inject('sessionStore'),
  observer,
)(MessagesBase);

export default Messages;
