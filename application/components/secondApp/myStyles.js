import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,TouchableHighlight} from 'react-native';

export let styles=StyleSheet.create({
  containter:{
    flex:1
  },
  titleView:{
    backgroundColor: '#48afdb',
    paddingTop:30,
    paddingBottom:10,
    flexDirection:"row",
  },
  titleText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold",
    flex:1,
    fontSize:20,
  },
  inputcontainer:{
    marginTop:5,
    padding:10,
    flexDirection:"row",
  },
  input:{
      height:36,
      padding:4,
      marginRight:5,
      flex:4,
      fontSize:18,
      borderWidth:1,
      borderColor:"#48afdb",
      borderRadius:4,
      color:"#48bbEC"
  },
  button:{
    height:36,
    flex:2,
    flexDirection:'row',
    backgroundColor:'#48afdb',
    justifyContent:'center',
    borderRadius:4,
  },
  textbuttn:{
    fontSize:18,
    color:"#fff",
    marginTop:6,
  },
  rowStyle:{
    flexDirection:"row",
    padding:12,
    height:44,
  },
  separator:{
    height:1,
    backgroundColor:"#CCCCCC",
  },
  todoText:{
    flex:1,
  }


});
