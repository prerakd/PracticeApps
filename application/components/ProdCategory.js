import React, {Component} from 'react';
import {Text} from 'react-native'
export default class ProdCategory extends Component{
  render()
  {
    return (<Text style={{fontWeight:"bold"}}>{this.props.categ}</Text>);
  }
}
