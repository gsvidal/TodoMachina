import React from "react";
import TodoTitle from "./components/TodoTitle";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
// import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: false},
  { text: "Spread the word about Bit Hug", completed: true},
  { text: "Llorar con la  cebolla", completed: false},
  { text: "Pagar al personal", completed: true},
]

function App() {
  return (
    <React.Fragment>
        
      <TodoTitle />  
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
