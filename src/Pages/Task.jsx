
import React from 'react';

const Task = ({ task, index, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className={`task-box ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)} 
      />

      <span
        className="task-text"
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>

      <button className="delete-button" onClick={() => deleteTask(index)}>
        Remove
      </button>
    </div>
  );
};

export default Task;
