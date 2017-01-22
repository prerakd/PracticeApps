import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class ProdDetails extends Component{
  render()
  {
    let colo;
    if(this.props.stock==true){
      colo=styles.stockStyle;
      //console.log(this.props.name);
    }
    else
      colo=styles.nonStockStyle;

    return (

      <View style={{flexDirection:"row"}}>
        <Text style={colo}>{this.props.name}</Text>
        <Text>{this.props.price}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  stockStyle: {
    color: 'black',
    width:100
  },
  nonStockStyle:{
    color: 'red',
    width:100
  },

});
