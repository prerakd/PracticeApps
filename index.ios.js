import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet} from 'react-native';
import CheckBox from 'react-native-checkbox';



class SearchBar extends Component{
  constructor(props)
  {
    super(props);
    this.state = {text: '',isChecked:false};
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBox=this.handleCheckBox.bind(this);
  }
  handleChange(text)
  {
    this.setState({text})

    this.props.handleInput(this.state.text,this.state.isChecked);
  }
  handleCheckBox()
  {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }),()=>{this.props.handleInput(this.state.text,this.state.isChecked);});


  }
  render()
  {

    return(
      <View style={{flexGrow: 1,backgroundColor: "steelblue"}}>
        <TextInput
         style={{height: 40,margin:25,borderWidth:1,width:300}}
         placeholder="     Search..."
         onChangeText={this.handleChange}
       />
       <CheckBox
         containerStyle={styles.containStyle}
         checkboxStyle={styles.checkboxStyle}
         labelStyle={styles.labStyle}
         label='Show only stocked'
         checked={this.state.isChecked}
         onChange={this.handleCheckBox}
       />
      </View>
    );
  }
}
class ProdCategory extends Component{
  render()
  {
    return (<Text style={{fontWeight:"bold"}}>{this.props.categ}</Text>);
  }
}
class ProdDetails extends Component{
  render()
  {
    let colo;
    if(this.props.stock==true){
      colo=styles.stockStyle;
      //console.log(this.props.name);
    }
    else
      colo=styles.nonStockStyle;

    return (

      <View style={{flexDirection:"row"}}>
        <Text style={colo}>{this.props.name}</Text>
        <Text>{this.props.price}</Text>
      </View>
    );
  }
}
class ProductTable extends Component {
    constructor(props)
    {
      super(props);


    }
    render()
    {

        var entries=[];
        var lastCat=null;
        this.props.products.forEach(
          (prod)=>
          {
            if(prod.category!=lastCat)
            {
              entries.push(<ProdCategory categ={prod.category}/>);
            }
            if(!this.props.isStock || prod.stocked)
              entries.push(<ProdDetails name={prod.name} price={prod.price} stock={prod.stocked}/>)
            lastCat=prod.category;
          }
        );

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        entries=ds.cloneWithRows(entries);


        return (
          <View style={{flexGrow: 12,backgroundColor:"skyblue"}}>
            <ListView
            dataSource={entries}
          renderRow={(rowData) => <View>{rowData}</View>}/>
          </View>

        );
    }
}

class MockApp extends Component {

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
      var PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}

      ];
        return (
            <View style={{flex:1}}>
                <SearchBar
                  input={this.state.textInput}
                  isStock={this.state.stockOnly}
                  handleInput={this.handleUserInput}
                />
                <ProductTable
                products={PRODUCTS}
                isStock={this.state.stockOnly}
                handleInput={this.handleUserInput}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  stockStyle: {
    color: 'black',
    width:100
  },
  nonStockStyle:{
    color: 'red',
    width:100
  },
  labStyle:{
    color:"black",
  },
  checkboxStyle:{
    height:15,
    width:15,
    marginLeft:25
  },
  containStyle:{
    backgroundColor:"steelblue"
  }

});
AppRegistry.registerComponent('AwesomeProject', () => MockApp);
