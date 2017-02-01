aimport React, {Component} from 'react';
import CheckBox from 'react-native-checkbox';
import {View, StyleSheet, TextInput} from 'react-native';
import styles from './searchbar.style'

export default class SearchBar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            text: '',
            isChecked: false
        };
    }
    handleChange = (text) => {
        this.setState({
            text
        }, () => this.props.handleInput(this.state.text, this.state.isChecked));
    }
    handleCheckBox = () => {
        this.setState(prevState => ({
            isChecked: !prevState.isChecked
        }), () => {
            this.props.handleInput(this.state.text, this.state.isChecked);
        });

    }
    render()
    {

        return (
            <View style={styles.viewStyle}>
                <TextInput underlineColorAndroid='transparent' autoCapitalize= "none" style={styles.textStyle} placeholder="     Search..." onChangeText={this.handleChange}/>
                <CheckBox underlayColor="transparent" containerStyle={styles.containStyle} checkboxStyle={styles.checkboxStyle} labelStyle={styles.labStyle} label='Show only stocked' checked={this.state.isChecked} onChange={this.handleCheckBox}/>
            </View>
        );
    }
}
