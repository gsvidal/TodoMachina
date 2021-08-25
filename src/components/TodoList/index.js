import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
      <section>
        <ul className="list__container">
            {props.children}
        </ul>
      </section>
  )
}

export default TodoList;