import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,TouchableHighlight} from 'react-native';
import ShowTime from './ShowTime'
import ShowButtons from './ShowButtons'
import ShowLaps from './ShowLaps'
import convert from 'minutes-seconds-milliseconds'
export default class extends Component{
  constructor(props)
  {
    super(props);
    this.startPressed=this.startPressed.bind(this);
    this.lapPressed=this.lapPressed.bind(this);
    this.resetPressed=this.resetPressed.bind(this);
    this.setButtonStyle=this.setButtonStyle.bind(this);
    this.displayLaps=this.displayLaps.bind(this);

    this.state={
      timeElapsed:null,
      isRunning:false,
      resetDisable:true,
      laps:[],
      lapDisable:true,
      offset:0,
      ds:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
    };




  displayLaps()
  {
    let len=this.state.laps.length;
    entries=this.state.laps.map(function(lap,ind){
      return(
      <View style={styles.lapStyle}>
        <Text style={styles.textStyle1}>Lap #{len-ind}:</Text>
        <Text style={styles.textStyle1}>{lap}</Text>
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

  setButtonStyle(){
    let col;
    if(this.state.isRunning)
      col='#ff0000';
      else {
        col='#009900';
      }
    return({
      borderColor:col
    });
  }
  startPressed()
  {
      let startTime=new Date();
      if(this.state.isRunning)
      {

        clearInterval(this.refId);
        this.setState({isRunning:false,resetDisable:false,lapDisable:true,offset:this.state.offset+this.state.timeElapsed});
        return;
      }
    else{
        this.refId=setInterval(
          ()=>{this.setState(
            {
              timeElapsed:new Date()-startTime+this.state.offset,
              isRunning:true,
              resetDisable:true,
              lapDisable:false,
            }
          )},30);
      }
    }
  lapPressed()
  {
      this.setState({
        laps:[convert(this.state.timeElapsed)].concat(this.state.laps)
      });
  }
  resetPressed()
  {


      clearInterval(this.refId);
      this.setState({isRunning:false,timeElapsed:null,resetDisable:true,lapDisable:true,laps:[],offset:0});
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.Upper}>
          <ShowTime time={convert(this.state.timeElapsed)}/>
          <View style={styles.viewSt}>
              <TouchableHighlight underlayColor="white" onPress={this.startPressed} style={[styles.buttonStyle,this.setButtonStyle()]}>
                <Text>{this.state.isRunning?'Pause':'Start'}</Text>
              </TouchableHighlight>
              <TouchableHighlight disabled={this.state.lapDisable} underlayColor="white" onPress={this.lapPressed} style={[styles.buttonStyle, styles.lapButon]}>
                <Text >Lap</Text>
              </TouchableHighlight>
              <TouchableHighlight disabled={this.state.resetDisable} underlayColor="white" onPress={this.resetPressed} style={[styles.buttonStyle, styles.lapButon]}>
                <Text>Reset</Text>
              </TouchableHighlight>
          </View>
        </View>
        <View style={styles.Lower}>
          {this.displayLaps()}
        </View>
      </View>

      // {/* <ShowLaps /> */}
      // {/* <View style={styles.Upper}>
      //   <View style={styles.textStyle}>
      //     <Text>00.00.00</Text>
      // </View>
      // <View style={styles.viewSt}>
      //   <Text>Hi</Text>
      //   <Text>Hello</Text>
      // </View>
      // </View> */}

  );
  }
}

var styles=StyleSheet.create({
  container:{
    flex:1,
  },
  Upper:{
    flex:1,
  },
  Lower:{
    flex:1,
  },
  textStyle:{
    flex:3,
    justifyContent:"center",
    alignItems:"center",

  },
  viewSt:{
    flex:3,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  timeStyle:{
      fontSize:50,
  },
  buttonStyle:{
    borderWidth:3,
    borderRadius:50,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:"center",
  },
  lapStyle:{
    justifyContent:"space-around",
    flexDirection:"row",

  },
  textStyle1:{
    fontSize:20,
  }


}

)
