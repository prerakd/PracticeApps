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
      prevOffset:0,
    }
  }
  componentWillMount()
  {

    let temp=[];
    for(let i=0;i<6;i++)
    {
      temp.push(this.dummy[i]);
      this.count++;
    }
    this.setState({
      imageArr:this.state.imageArr.concat(temp),
      prevOffset:100,
    },()=>{
      // console.log(currentOffset);
      console.log(this.state.prevOffset);
    })

  }
  addItems = (event) =>
  {
      let currentOffset = event.nativeEvent.contentOffset.y;
      //console.log(currentOffset);
      console.log(this.state.imageArr.length);
      // if(currentOffset>this.offset)
      //   console.log("up");
      //   else {
      //     console.log("down");
      //   }
        //console.log(currentOffset);
        //console.log(this.state.prevOffset);
          let temp=[];

          let addValue=0;
          if(currentOffset>this.state.prevOffset)
          {
            //console.log(currentOffset+" "+this.state.prevOffset);
            //temp.splice(0,3);
            //console.log("here"+" "+this.count);
            for(let i=0;i<3 && this.count<this.dummy.length;i++)
            {
              temp.push(this.dummy[this.count]);
              this.count++;
            }
            addValue=100;
        }
        this.setState({
          imageArr:this.state.imageArr.concat(temp),
          prevOffset:this.state.prevOffset+addValue,
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
          style={{width: 100, height: 100, borderColor:'red'}}
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
      <ScrollView contentContainerStyle={{alignItems:"center",justifyContent:"center"}} onScroll={this.addItems} scrollEventThrottle={16}>
        {list}
      </ScrollView>
    </View>
    );
  }
}
