import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,TouchableHighlight} from 'react-native';


export default class ShowButtons extends Component{
  constructor(props)
  {
    super(props);
    this.pressed=this.pressed.bind(this);
  }
  pressed()
  {
    console.log("button pressed");
  }
  render()
  {
    return(
          <View style={[styles.Lower]}>
            <TouchableHighlight underlayColor="gray" onPress={this.pressed} >
              <Text alignItems="center">Start</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="gray" onPress={this.pressed}>
              <Text>Stop</Text>

            </TouchableHighlight>

          </View>

  );
  }
}

styles=StyleSheet.create({

viewSt:{
  flex:1,
  justifyContent:"space-around",


},
Lower:{
  flex:1,
  borderWidth:5,
  borderColor:"blue",
  flexDirection:"row",
},
})
