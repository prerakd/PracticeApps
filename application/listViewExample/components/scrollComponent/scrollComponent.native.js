import React, {Component} from 'react';
import {View,Image,ScrollView,TouchableHighlight,Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import dummydata from '../../constants/data.js'

export default class ScrollComponent extends Component {
  constructor(props)
  {
    super(props);
    this.count=0;
  this.state={
    imageArr:[],
    dummy: dummydata.src,
  }
  }
  componentWillMount()
  {

    let temp=[];
    for(let i=0;i<3;i++)
    {
      temp.push('https://facebook.github.io/react/img/logo_og.png');
      this.count++;
    }
    this.setState({
      imageArr:this.state.imageArr.concat(temp),
    })
  }
  addItems = () =>
  {
    let temp=[];
    for(let i=0;i<1;i++)
    {
      temp.push('https://facebook.github.io/react/img/logo_og.png');
      this.count++;
    }
    this.setState({
      imageArr:this.state.imageArr.concat(temp),
    })
  }
  render()
  {

    let arr=[];
    for(let i=0;i<this.state.imageArr.length;i++)
    {
      console.log(this.state.imageArr[i]);
      arr.push(
        <TouchableHighlight onPress={() => Actions.pop()}>
            <Image
            style={{width: 100, height: 100}}
            source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
            />
        </TouchableHighlight>
      );
    }
    return(
      <View>
      <Text>
        ScrollView Page
      </Text>
      <ScrollView contentContainerStyle={{alignItems:"center",justifyContent:"center"}} onScroll={this.addItems}>
        {arr}
      </ScrollView>
    </View>
    );
  }
}
