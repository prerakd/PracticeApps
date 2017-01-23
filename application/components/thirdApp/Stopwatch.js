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
    this.state={timeElapsed:null,isRunning:false,resetDisable:true};
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
        this.setState({isRunning:false,resetDisable:false});
        return;
      }
    else{
        this.refId=setInterval(
          ()=>{this.setState(
            {
              timeElapsed:new Date()-startTime,
              isRunning:true,
              resetDisable:true,
            }
          )},30);
      }
    }
  lapPressed()
  {

  }
  resetPressed()
  {


      clearInterval(this.refId);
      this.setState({isRunning:false,timeElapsed:null,resetDisable:true});
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.Upper}>
          <View style={styles.textStyle}>
            <Text style={styles.timeStyle}>{convert(this.state.timeElapsed)}</Text>
          </View>
          <View style={styles.viewSt}>
              <TouchableHighlight underlayColor="white" onPress={this.startPressed} style={[styles.buttonStyle,this.setButtonStyle()]}>
                <Text>{this.state.isRunning?'Pause':'Start'}</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="white" onPress={this.stopPressed} style={[styles.buttonStyle, styles.lapButon]}>
                <Text >Lap</Text>
              </TouchableHighlight>
              <TouchableHighlight disabled={this.state.resetDisable}underlayColor="white" onPress={this.resetPressed} style={[styles.buttonStyle, styles.lapButon]}>
                <Text >Reset</Text>
              </TouchableHighlight>
            </View>
      </View>
      <View style={styles.Lower}>
        <Text>List of laps</Text>
      </View>



        {/* <ShowTime />
        <ShowButtons /> */}
        {/* <ShowLaps /> */}
        {/* <View style={styles.Upper}>
          <View style={styles.textStyle}>
            <Text>00.00.00</Text>
        </View>
        <View style={styles.viewSt}>
          <Text>Hi</Text>
          <Text>Hello</Text>
        </View>
        </View> */}
      </View>
  );
  }
}

styles=StyleSheet.create({
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


  }


}

)
