import React from "react";
import TodoTitle from "./components/TodoTitle";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
// import './App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false},
  { text: "Spread the word about Bit Hug", completed: true},
  { text: "Llorar con la  cebolla", completed: true},
  { text: "Pagar al personal", completed: false},
  { text: "Contar al personal2", completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = todos;
  const searchText = searchValue.toLowerCase();

  if(searchValue.length > 0) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
        
      <TodoTitle />  
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
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
