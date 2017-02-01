import {StyleSheet} from 'react-native'
export default StyleSheet.create({

  stockStyle: {
    color: 'black',
    width:100
  },
  nonStockStyle:{
    color: 'red',
    width:100
  },
  separator:{
    height:1,
    backgroundColor:"rgb(0,0,255)",
  },
  rowStyle:{
    flexDirection:"row",
    padding:12,
    height:44,
    justifyContent:'space-between'
  },
  padLeft:{
    paddingLeft:20,
  }
  ,padRight:{
    paddingRight:20,
  }

});
