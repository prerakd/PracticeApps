import React, {Component} from 'react';
import {View,Image,ScrollView,TouchableHighlight,Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import dummydata from '../../constants/data.js'

export default class ScrollComponent extends Component {
  constructor(props)
  {
    super(props);
    this.count=0;
    this.offset=0;
    this.dummy=dummydata.src;
    this.state={
      imageArr:[],
    }
  }
  componentWillMount()
  {

    let temp=[];
    for(let i=0;i<3;i++)
    {
      temp.push(this.dummy[i]);
      this.count++;
    }
    this.setState({
      imageArr:this.state.imageArr.concat(temp),
    })

  }
  addItems = (event) =>
  {
      //let currentOffset = event.nativeEvent.contentOffset.y;
      //this.offset = currentOffset;

    let temp=[];
    for(let i=0;i<1 && this.count<this.dummy.length;i++)
    {
      temp.push(this.dummy[this.count]);
      this.count++;
    }
    this.setState({
      imageArr:this.state.imageArr.concat(temp),
    })

  }
  formList=()=>
  {
    let arr=[];
    for(let i=0;i<this.state.imageArr.length;i++)
    {
      arr.push(
        <TouchableHighlight onPress={() => Actions.pop()}>
            <Image
            style={{width: 100, height: 100}}
            source={{uri:this.state.imageArr[i]}}
            />
        </TouchableHighlight>
      );
    }
    return arr;
  }
  render()
  {

    let list=this.formList();
    return(
      <View>
      <Text>
        ScrollView Page
      </Text>
      <ScrollView contentContainerStyle={{alignItems:"center",justifyContent:"center"}} onScroll={this.addItems}>
        {list}
      </ScrollView>
    </View>
    );
  }
}
