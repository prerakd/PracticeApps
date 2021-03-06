import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    ListView,
    StyleSheet,
    TouchableHighlight,
    Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './todoScreen.style'
export default class ToDoScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            newToDo: '',
            ds: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            todoList: this.props.list
        }
    }
    addTodo = () => {
        if (this.state.newToDo !== "") {
            this.setState({
                todoList: this.state.todoList.concat([this.state.newToDo]),
                newToDo: ''
            })
        }
    }
    displayTodos = () => {

        entries = this.state.todoList.map(function(todo) {
            return (
                <View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.todoText}>{todo}</Text>

                    </View>
                    <View style={styles.separator}/>
                </View>
            );
        });

        entries = this.state.ds.cloneWithRows(entries);
        return (
          <ListView
            dataSource={entries}
            renderRow={(rowData) => < View>{rowData}< /View>} />
      );
    }
    doSomething = () => {
        this.props.addmain(this.state.todoList)
        Actions.pop();
    }
    render()
    {
        return (
            <View style={styles.containter}>
                <View style={styles.titleView}>
                    <Button onPress={this.doSomething} title="<" color="#841584" accessibilityLabel="Learn more about this purple button"/>
                    <Text style={styles.titleText}>{this.props.day}'s Todos</Text>
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput style={styles.input} placeholder="Add task" value={this.state.newToDo} onChangeText={(text) => this.setState({newToDo: text})}/>

                    <TouchableHighlight style={styles.button} underlayColor='#dddddd' onPress={() => this.addTodo()}>
                        <Text style={styles.textbuttn}>Add!</Text>
                    </TouchableHighlight>

                </View>
                {this.displayTodos()}
            </View>)
          }
        }
