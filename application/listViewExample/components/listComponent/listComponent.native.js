import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,TouchableHighlight,Image} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';

    export default class ListComponent extends Component{
      constructor()
      {
        super();
        this.state={
        ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      }

      }

      render()
      {
          let imageArr=[];
          for(let i=0;i<100;i++)
          {
            imageArr.push('https://facebook.github.io/react/img/logo_og.png');
          }

          let entries=this.state.ds.cloneWithRows(imageArr);
          return(
            <View>
              <Text>
                ListView
              </Text>
            <ListView
              dataSource={entries}
              renderRow={this.renderImage}
              />
          </View>

          )
      }
      renderImage = (data) => {
        return(
          <TouchableHighlight style={{alignItems:"center" ,justifyContent:"center"}} onPress={() => Actions.Second()} >
            <Image style={{height:100,width:100}} source={{uri:data}}
               />
           </TouchableHighlight>
        );
      }
    }
