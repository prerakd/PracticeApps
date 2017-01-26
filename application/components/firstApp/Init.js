import React, {Component} from 'react';
import MockApp from './MockApp'
import dummyData from './dummyData';
export default class Init extends Component{
  render()
  {
    return(
      <MockApp products={dummyData.data}/>
    )
  }
}
