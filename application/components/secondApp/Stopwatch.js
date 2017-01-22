import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';


const DAYS=['Sunday','Monday','Tuesday','WednesDay','Thursday','Friday','Saturday'];
export default class Stopwatch extends Component{

constructor(props)
{
  super(props);
  this.createList=this.createList.bind(this);
}
createList()
{
  return (
    DAYS.map(function(day){
      return (
      <DayItem day={day} />
    );
    }
  )
  );
}
render()
{
  //list=
  return(
    <View  style={styles.viewStyle}>
      <Text>Days of our lives:</Text>
      {this.createList()}
    </View>
  );
}
}
class DayItem extends Component{
  render()
  {
    return(
      <Text>{this.props.day}</Text>
    );
  }
}
const styles=StyleSheet.create({
  viewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

}
)
