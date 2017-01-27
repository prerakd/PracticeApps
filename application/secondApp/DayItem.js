import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,TouchableHighlight} from 'react-native';


import { Actions } from 'react-native-router-flux';

export default class DayItem extends Component{
  constructor(props)
  {
    super(props);
    this.setStyle=this.setStyle.bind(this);
    this.check=this.check.bind(this);
    this.state={
      todoList:[],
    }
  }
  check()
  {
    console.log("here");
  }
  setStyle()
  {
      let opacity=1/(this.props.offset+1);
      let col='rgba(0 , 0, 255, '+opacity+')';
      let fs=60-6*this.props.offset;
      lh=70;

      return{
        color:col,
        fontWeight:"normal",
        fontSize:fs,
        lineHeight:lh,
      }
  }
  addItmes = (newItems) =>
  {
        this.setState({
          todoList:newItems
        });

  }
  render()
  {
    let o={
      data:this.state.todoList,
      day:this.props.day,
      addmain:this.addItmes,
      list:this.state.todoList,
    }
    return(
        <Text style={this.setStyle()} onPress={() => Actions.todo(o)}>{this.props.day}</Text>
    );
  }

}
