import React, {Component} from 'react';
import {AppRegistry, Text, View,TextInput,ListView,StyleSheet,TouchableHighlight,Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ToDo extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      newToDo:'',
      ds:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      todoList:this.props.list,
    }
  }
  addTodo = () =>
  {
      if(this.state.newToDo!=="")
      {
      this.setState({
        todoList:this.state.todoList.concat([this.state.newToDo]),
        newToDo:'',
      })
    }
      //console.log("hello");
  }
  displayTodos=()=>
  {
    //console.log("hello");
    entries=this.state.todoList.map(function(todo){
      return(
        <View>
          <View style={styles.rowStyle}>
            <Text style={styles.todoText}>{todo}</Text>

          </View>
          <View style={styles.separator} />
      </View>
    );
    });

    entries=this.state.ds.cloneWithRows(entries);
    return(
        <ListView
        dataSource={entries}
      renderRow={(rowData) =><View>{rowData}</View>} />

    );
  }
  doSomething=() =>
  {
    //console.log("something happend");
    this.props.addmain(this.state.todoList)
    Actions.pop();
  }
  render()
  {
    return(
      <View style={styles.containter}>
        <View style={styles.titleView}>
          <Button
            onPress={this.doSomething}
            title="<"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Text style={styles.titleText} >{this.props.day}'s Todos</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Add task"
            value={this.state.newToDo}
            onChangeText={(text) => this.setState({newToDo:text})}
          />

          <TouchableHighlight style={styles.button} underlayColor='#dddddd' onPress={()=>this.addTodo()}>
            <Text style={styles.textbuttn}>Add!</Text>
          </TouchableHighlight>

        </View>
        {this.displayTodos()}
    </View>
    )
  }
}
let styles=StyleSheet.create({
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
