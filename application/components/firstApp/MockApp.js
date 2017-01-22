import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import {View} from 'react-native';

export default class MockApp extends Component {

    constructor(props)
    {
      super(props);
      this.state={textInput:"",stockOnly:false}
      this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(filterText, inStockOnly) {
    this.setState({
        textInput:filterText,
        stockOnly:inStockOnly
    });
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
                products={this.props.products}
                isStock={this.state.stockOnly}
                handleInput={this.handleUserInput}/>
            </View>

        );
    }
}
