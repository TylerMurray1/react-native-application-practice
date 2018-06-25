import React from 'react';

import  {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux'

class Home extends React.Component {
  state = {
      name: '',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder='ex. John'
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.nextButton}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },
  nextButton: {
    marginLeft: 20,
    fontSize: 20,
  }
});

export default Home;
