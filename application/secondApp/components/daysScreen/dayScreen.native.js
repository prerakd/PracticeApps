import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    ListView,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Moment from 'moment';
import DayItem from '../dayItem'
import styles from './dayScreen.style'
export default class DayScreen extends Component {

    constructor(props)
    {
        super(props);
    }
    createList = () => {

        dayComponents = [];
        for (i = 0; i < 7; i++) {
            dayComponents.push(<DayItem day={Moment().add(i, 'days').format('dddd')} offset={i}/>)
        }
        return dayComponents;
    }
    render()
    {
        return (
            <View style={styles.viewStyle}>
                <Text>Days of our lives</Text>
                {this.createList()}
            </View>
        );
    }
}
