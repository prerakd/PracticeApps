import {Router, Scene} from 'react-native-router-flux';
import React, {Component} from 'react';

import DaysScreen from '../daysScreen'
import ToDoScreen from '../todoScreen'

export default class Init extends Component {

    render()
    {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="Days" component={DaysScreen} title="Days" initial hideNavBar/>
                    <Scene key="todo" component={ToDoScreen} title="SecondScreen"/>

                </Scene>
            </Router>
        );
    }

}
