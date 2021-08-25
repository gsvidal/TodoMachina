import React from 'react';
import './TodoCounter.css';

function TodoCounter(props) {
  const { completed, total } = props;
  return (
    <h2 
      className="TodoCounter"
    >
      {`Has completado ${completed} de ${total} TODOs`}
    </h2>
  )
}

export default TodoCounter;
