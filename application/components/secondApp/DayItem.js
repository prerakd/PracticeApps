import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';

export default class DayItem extends Component{
  constructor(props)
  {
    super(props);
    this.setStyle=this.setStyle.bind(this);
  }
  setStyle()
  {
      //let fw=(7-this.props.offset+1)*100;
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
  render()
  {
    return(
      <Text style={this.setStyle()}>{this.props.day}</Text>
    );
  }

}
