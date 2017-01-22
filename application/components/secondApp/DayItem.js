import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';

export default class DayItem extends Component{
  render()
  {
    return(
      <Text>{this.props.day}</Text>
    );
  }
}
