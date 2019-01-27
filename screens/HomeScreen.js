import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  state = {
    placeName: ''
  }
  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <TextInput 
          style={{width: 300}}
          value={this.state.placeName} 
          placeholder="An awesome place"
          onChangeText={this.placeNameChangeHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
