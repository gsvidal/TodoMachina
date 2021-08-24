import React from 'react';
import '../css/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
  // const [] = React.useState(""); 

  const onSearchValueChange = (event) => {
    const val = event.target.value;
    console.log(val);
    setSearchValue(val);
  }

  return (
    <React.Fragment>
     <input 
       placeholder="Search..." 
       className="TodoSearch"
       value={searchValue}
       onChange={onSearchValueChange}
     />
     <span className="search-icon"></span>
     {/* <p>{searchValue}</p> */}
    </React.Fragment>
  )
}

export default TodoSearch;