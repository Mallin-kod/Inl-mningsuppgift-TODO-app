import React, { useState } from 'react';


const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');


  function handleInputChange(event) {
    setNewTask(event.target.value);
  }


  function handleAddTask() {
    addTask(newTask);
    setNewTask('');
  }

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Add ToDo..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

export default TaskInput;
