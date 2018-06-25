import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat';

import  {
  View,
  Text
} from 'react-native';

class Chat extends React.Component {
  state = {
    //these are placeholders for an example of the array of objects. This will be filled dynamically by backend
    messages: [{text: 'Hello', user: 'Me', createdAt: null}]
  };
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        //this is where the backend code goes for message sending (i.e firebase)
      />
    );
  }
}

Chat.defaultProps = {
  name: 'John',
};

export default Chat;
