import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';
import Moment from 'moment';
import DayItem from './DayItem'
//const DAYS=['Sunday','Monday','Tuesday','WednesDay','Thursday','Friday','Saturday'];
export default class MockApp2 extends Component{

constructor(props)
{
  super(props);
  this.createList=this.createList.bind(this);
}
createList()
{

  dayComponents=[];
  for(i=0;i<7;i++)
  {
    dayComponents.push(<DayItem day= {Moment().add(i,'days').format('dddd')} offset={i}/>)
  }
  return dayComponents;
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
const styles=StyleSheet.create({
  viewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

}
)
