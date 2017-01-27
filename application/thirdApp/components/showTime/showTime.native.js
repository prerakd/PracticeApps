import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';
import convert from 'minutes-seconds-milliseconds'
import styles from './showTime.style'
export default class ShowTime extends Component{
  render()
  {

    return(
      <View style={styles.textStyle}>
        <Text style={styles.timeStyle}>{this.props.time}</Text>
      </View>
    );
  }
}
