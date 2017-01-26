import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import styles from './myStyles.js'
export default class ProdDetails extends Component{
  render()
  {
    let colo;
    if(this.props.stock==true){
      colo=styles.stockStyle;
    }
    else
      colo=styles.nonStockStyle;

    return (
      <View>
      <View style={styles.rowStyle}>
        <Text style={colo}>{this.props.name}</Text>
        <Text>{this.props.price}</Text>
      </View>
        <View style={styles.separator} />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//
//   stockStyle: {
//     color: 'black',
//     width:100
//   },
//   nonStockStyle:{
//     color: 'red',
//     width:100
//   },
//   separator:{
//     height:1,
//     backgroundColor:"rgb(0,0,255)",
//   },
//   rowStyle:{
//     flexDirection:"row",
//     padding:12,
//     height:44,
//   }
//
// });
