import React, {Component} from 'react'
import ProductDisplayApp from '../productDisplayApp'
import dummyData from '../../constants/dummyData'
export default class Init extends Component {
    render() {
        return (<ProductDisplayApp products={dummyData.data}/>)
    }
}
