import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native'
export default class ProdCategory extends Component{
  render()
  {
    return (
      <View style={styles.rowStyle}>
      <Text style={styles.textStyle}>{this.props.categ}</Text>
    </View>
    );
  }
}
let styles=StyleSheet.create({
  textStyle:{
    fontWeight:"bold"
  },

  rowStyle:{
    padding:12,
    height:44,
  }
})
