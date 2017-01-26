import React, {Component} from 'react';
import CheckBox from 'react-native-checkbox';
import {View,StyleSheet,TextInput} from 'react-native';
import styles from './myStyles.js'

export default class SearchBar extends Component{
  constructor(props)
  {
    super(props);
    this.state = {text: '',isChecked:false};
  }
  handleChange=(text)=>
  {
    this.setState({text},()=>this.props.handleInput(this.state.text,this.state.isChecked));
  }
  handleCheckBox=()=>
  {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }),()=>{this.props.handleInput(this.state.text,this.state.isChecked);});


  }
  render()
  {

    return(
      <View style={styles.viewStyle}>
        <TextInput
         style={styles.textStyle}
         placeholder="     Search..."
         onChangeText={this.handleChange}
       />
       <CheckBox
         containerStyle={styles.containStyle}
         checkboxStyle={styles.checkboxStyle}
         labelStyle={styles.labStyle}
         label='Show only stocked'
         checked={this.state.isChecked}
         onChange={this.handleCheckBox}
       />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   labStyle:{
//     color:"black",
//   },
//   checkboxStyle:{
//     height:15,
//     width:15,
//     marginLeft:25
//   },
//   containStyle:{
//     backgroundColor:"steelblue"
//   },
//   textStyle:{
//     height: 40,
//     margin:25,
//     borderWidth:1,
//     width:300
//   },
//   viewStyle:
//     {flexGrow: 1,
//       backgroundColor: "steelblue"
//     }
//
// });
