import { Router, Scene } from 'react-native-router-flux';
import React, {Component} from 'react';

import MockApp2 from './MockApp2'
import ToDo from './ToDo'

export default class Init2 extends Component{

  render()
  {
    return(
<Router>
    <Scene key="root">
      <Scene key="Days"
        component={MockApp2}
        title="Days"
        initial
        hideNavBar
      />
      <Scene
        key="todo"
        component={ToDo}
        title="SecondScreen"
      />

    </Scene>
  </Router>);
  }


}
