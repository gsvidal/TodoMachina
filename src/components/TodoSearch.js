import React from 'react';
import '../css/TodoSearch.css'

function TodoSearch() {
  return (
    <React.Fragment>
     <input placeholder="Search..." className="TodoSearch"/>
     <span className="search-icon"></span>
    </React.Fragment>
  )
}

export default TodoSearch;