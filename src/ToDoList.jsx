
import React, { useState } from 'react';
import TaskInput from './Pages/TaskInput'; 
import Task from './Pages/Task'; 

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

 
  function addTask(newTask) {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  }


  function deleteTask(index) {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }


  function toggleTaskCompletion(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;

 
    if (newTasks[index].completed) {
      const [completedTask] = newTasks.splice(index, 1); 
      newTasks.push(completedTask); 
    }

    setTasks(newTasks); 
  }

  return (
    <div className="to-do-list">
     

      {}
      <TaskInput addTask={addTask} />

      {}
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
