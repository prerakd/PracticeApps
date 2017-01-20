import React, {Component} from 'react';
import {View,ListView} from 'react-native';
import ProdCategory from './ProdCategory';
import ProdDetails from './ProdDetails'
export default class ProductTable extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        ds:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

      }

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

        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        entries=this.state.ds.cloneWithRows(entries);


        return (
          <View style={{flexGrow: 12,backgroundColor:"skyblue"}}>
            <ListView
            dataSource={entries}
          renderRow={(rowData) => <View>{rowData}</View>}/>
          </View>

        );
    }
}
