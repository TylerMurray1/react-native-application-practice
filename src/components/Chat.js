import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat';

import  {
  View,
  Text
} from 'react-native';

class Chat extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    messages: [],
    count: 0
  }
}

render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          this.setState({count: this.state.count + 1});
          var joined = this.state.messages.concat({_id:this.state.count, text: message[0].text, user: "dev", createdAt: new Date()});
          this.setState({messages: joined.reverse()});
        }}
      />
    );
  }
}

Chat.defaultProps = {
  name: 'John',
};

export default Chat;
