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
      <View style={styles.viewSt}>
          <TouchableHighlight underlayColor="white" onPress={this.startPressed} style={[styles.buttonStyle,this.setButtonStyle()]}>
            <Text>{this.state.isRunning?'Pause':'Start'}</Text>
          </TouchableHighlight>
          <TouchableHighlight disabled={this.state.lapDisable} underlayColor="white" onPress={this.lapPressed} style={[styles.buttonStyle, styles.lapButon]}>
            <Text >Lap</Text>
          </TouchableHighlight>
          <TouchableHighlight disabled={this.state.resetDisable} underlayColor="white" onPress={this.resetPressed} style={[styles.buttonStyle, styles.lapButon]}>
            <Text>Reset</Text>
          </TouchableHighlight>
      </View>

  );
  }
}

let styles=StyleSheet.create({

  viewSt:{
    flex:3,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
Lower:{
  flex:1,
  borderWidth:5,
  borderColor:"blue",
  flexDirection:"row",
},
})
