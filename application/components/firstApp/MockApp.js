import React, {Component} from 'react';
import {View} from 'react-native';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default class MockApp extends Component {

    constructor(props)
    {
      super(props);

      this.state={
        textInput:"",
        stockOnly:false,
        products:props.products
      }
    }

    handleUserInput = (filterText, inStockOnly) => {
    this.setState({
        textInput:filterText,
        stockOnly:inStockOnly,
    },
  );
  }

    render() {
        return (
            <View style={{flex:1}}>
                <SearchBar
                  input={this.state.textInput}
                  isStock={this.state.stockOnly}
                  handleInput={this.handleUserInput}
                />
                <ProductTable
                products={this.state.products}
                isStock={this.state.stockOnly}
                  input={this.state.textInput} />
            </View>

        );
    }
}
