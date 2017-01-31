import React, {Component} from 'react';
import {View,Image,ScrollView} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import ListComponent from '../listComponent'
import ScrollComponent from '../scrollComponent'
export default class App extends Component {
  render()
  {


    return(
      <Router>
          <Scene key="root">
              <Scene key="First" component={ListComponent}  title="Days" initial hideNavBar/>
              <Scene key="Second" component={ScrollComponent} title="SecondScreen"/>
          </Scene>
      </Router>
      //<ListComponent />
    );
  }
}
