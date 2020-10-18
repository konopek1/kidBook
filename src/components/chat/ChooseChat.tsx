import React from 'react';
import ChatFrame from './Chat';

export default class Chat extends React.PureComponent<{}, {}> {
  render() {
    return (<ChatFrame chatUid="0" />);
  }
}
