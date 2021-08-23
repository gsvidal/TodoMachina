import React from 'react';
import '../css/TodoItem.css';

function TodoItem(props) {
  return(
    <li className="TodoItem">
      <span className={`TodoItem__icon TodoItem__icon-check ${props.completed && 'TodoItem__icon-check--completed'}`}></span>
      <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'}`}>{props.text}</p>
      <span className="TodoItem__icon TodoItem__icon-delete"></span>
    </li>
  )
}

export default TodoItem;