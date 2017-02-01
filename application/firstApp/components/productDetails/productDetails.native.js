import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './productDetails.style'
export default class ProductDetails extends Component {
    render()
    {
        let colo;
        if (this.props.stock == true) {
            colo = styles.stockStyle;
        } else
            colo = styles.nonStockStyle;

        return (
            <View>
                <View style={styles.rowStyle}>
                    <Text style={[styles.padLeft,colo]}>{this.props.name}</Text>
                    <Text style={styles.padRight}>{this.props.price}</Text>
                </View>
                <View style={styles.separator}/>
            </View>
        );
    }
}
