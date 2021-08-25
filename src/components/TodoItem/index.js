import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  return(
    <li className="TodoItem">
      <span 
        className={`TodoItem__icon TodoItem__icon-check ${props.completed && 'TodoItem__icon-check--completed'}`}
        onClick={props.onComplete}
      ></span>
      <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'}`}>{props.text}</p>
      <span 
        className="TodoItem__icon TodoItem__icon-delete"
        onClick={props.onDelete}
      ></span>
    </li>
  )
}

export default TodoItem;