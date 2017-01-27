import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import styles from './productCategory.style'
export default class ProductCategory extends Component {
    render()
    {
        return (
            <View style={styles.rowStyle}>
                <Text style={styles.textStyle}>{this.props.categ}</Text>
            </View>
        );
    }
}
