import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import ListItem from '../components/ListItem/ListItem'

export default class HomeScreen extends React.Component {
  state = {
    placeName: '',
    places: []
  }
  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    this.state.placeName.trim()!=='' ? (
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        }
      })
    ): null
  }
  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index
        })
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem 
        key={i} 
        placeName={place} 
        onItemPressed={() => {this.placeDeletedHandler(i)}}/>  
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            value={this.state.placeName} 
            placeholder="An awesome place"
            onChangeText={this.placeNameChangeHandler}
          />
          <Button 
            onPress={this.placeSubmitHandler}
            style={styles.placeButton}
            title="Add"/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 26,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer:{
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "70%",
  },
  placeButton:{
    width: "30%",
  },
  listContainer:{
    width: "100%",
  }

});
