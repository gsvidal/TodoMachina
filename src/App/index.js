import React from "react";
import AppUI from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false},
//   { text: "Spread the word about Bit Hug", completed: true},
//   { text: "Llorar con la  cebolla", completed: true},
//   { text: "Pagar al personal", completed: false},
//   { text: "Contar al personal2", completed: false},
// ]

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue)) ;
    parsedItem = [];
  }  

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem,
  ]

}

function App() {

  const [patito, savePatito] = useLocalStorage("PATITO_V1", "duck")
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])

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



  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    //2da opción en vez de las líneas 44 y 45
    // const newTodos = todos.slice(0,todoIndex).concat(todos.slice(todoIndex+1,todos.length));
    saveTodos(newTodos);
  }

  return [
    <p>{patito}</p>,
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ];
}

export default App;
