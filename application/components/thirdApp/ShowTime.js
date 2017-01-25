import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';
import convert from 'minutes-seconds-milliseconds'
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
let styles=StyleSheet.create({
  textStyle:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },
  timeStyle:{
      fontSize:50,
  },

}

)
