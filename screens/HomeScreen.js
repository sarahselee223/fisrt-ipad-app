import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
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
          places: prevState.places.concat({key: Math.random(), value: prevState.placeName})
        }
      })
    ): null
  }
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key
        })
      }
    })
  }

  render() {
  
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
        <FlatList 
          style={styles.listContainer}
          data={this.state.places}
          renderItem={(info) => (
            <ListItem 
              placeName={info.item.value} 
              onItemPressed={() => {this.placeDeletedHandler(info.item.key)}}/>  
          )}/>
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
    marginBottom: "5%"
  }

});
