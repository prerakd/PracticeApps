import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';
import convert from 'minutes-seconds-milliseconds'
export default class ShowTime extends Component{
  render()
  {

    return(
      <View style={styles.textStyle}>
        <Text style={styles.timeStyle}>{convert(this.state.timeElapsed)}</Text>
      </View>
    );
  }
}
styles=StyleSheet.create({
  textStyle:{
    flex:1,
    borderWidth:4,
    borderColor:"black",
    justifyContent:"center",
    alignItems:"center",

  },
  timeStyle:{
      fontSize:50,
  },

}

)
