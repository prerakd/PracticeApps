import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';

export default class ShowTime extends Component{
  render()
  {
    return(
        <View style={styles.textStyle}>
          <Text>00.00.00</Text>
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

}

)
