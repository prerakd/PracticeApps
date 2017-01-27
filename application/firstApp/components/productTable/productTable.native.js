import React, {Component} from 'react';
import {View, ListView, Text} from 'react-native';
import ProductCategory from '../productCategory';
import ProductDetails from '../productDetails'
import styles from './productTable.style'
export default class ProductTable extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            ds: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    }

    render() {
        let entries = this.state.ds.cloneWithRowsAndSections(this.mapStocks())

        return (
            <View style={styles.listStyle}>
                <ListView dataSource={entries} renderRow={this.renderList} renderSectionHeader={this.renderCategory}/>
            </View>

        );
    }

    renderList = (rowData) => {
        return (<ProductDetails price={rowData.price} name={rowData.name} stock={rowData.stockOnly}/>)
    }

    renderCategory = (SectionData, category) => {
        return (<ProductCategory categ={category}/>)
    }

    mapStocks = () => {
        let stockMap = [];
        this.props.products.forEach((prod) => {
            if (prod.name.indexOf(this.props.input) === -1 || (!prod.stocked && this.props.isStock)) {
                return;
            }

            if (!stockMap[prod.category]) {
                stockMap[prod.category] = [];
            }

            let obj = {
                name: prod.name,
                price: prod.price,
                stockOnly: prod.stocked
            }

            stockMap[prod.category].push(obj);
        });
        return stockMap;
    }
}
