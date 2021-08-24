import React from 'react';
import '../css/TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert("ya completaste el todo: " + props.text);
  }
  const onDelete = () => {
    alert("Borraste el todo: " + props.text);
  }

  return(
    <li className="TodoItem">
      <span 
        className={`TodoItem__icon TodoItem__icon-check ${props.completed && 'TodoItem__icon-check--completed'}`}
        onClick={onComplete}
      ></span>
      <p className={`TodoItem__text ${props.completed && 'TodoItem__text--completed'}`}>{props.text}</p>
      <span 
        className="TodoItem__icon TodoItem__icon-delete"
        onClick={onDelete}
      ></span>
    </li>
  )
}

export default TodoItem;