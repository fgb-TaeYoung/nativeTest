import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

interface todoInsertProp{
  onAddTodo: (todoItem:string)=>void
}

const TodoInsert = (props:todoInsertProp) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = (newTodo:string) => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    props.onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 15,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;