import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,ScrollView} from 'react-native';
export default class extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      ds:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    }

  }
  render()
  {

    entries=this.props.laps.map(function(lap,ind){
      return(
      <View style={styles.lapStyle}>
        <Text style={styles.textStyle}>Lap #{ind+1}:</Text>
        <Text>{lap}</Text>
      </View>);
    })
    //entries=this.props.laps;
    entries=this.state.ds.cloneWithRows(entries);
    return(
        <ListView
        dataSource={entries}
      renderRow={(rowData) =><View>{rowData}</View>}/>

    );

  }
}
styles=StyleSheet.create({
  lapStyle:{
    justifyContent:"space-around",
    flexDirection:"row",

  },
  textStyle:{
    fontSize:15,
  }
});
