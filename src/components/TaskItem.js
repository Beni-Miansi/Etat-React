import React from 'react';

const TaskItem = ({ task, toggleDone, editTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.isDone ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleDone(task.id)}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
