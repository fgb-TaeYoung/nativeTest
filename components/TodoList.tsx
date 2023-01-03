import React from 'react';
import {StyleSheet, ScrollView,Text, View} from 'react-native';
import TodoListItem from './TodoListItem';

type todosType = {id: string, textValue: string, checked: boolean };
interface todoListProp{
  todos: todosType[],
  onRemove: (id:string) => (e:MouseEvent) => void,
  onToggle: (id:string) => (e:MouseEvent) => void,
}

const TodoList = (props:todoListProp) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {props.todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={props.onRemove}
          onToggle={props.onToggle}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;