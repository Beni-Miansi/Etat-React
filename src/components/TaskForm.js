import React, { useState } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [name, setName] = useState(taskToEdit ? taskToEdit.name : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      if (taskToEdit) {
        editTask({ ...taskToEdit, name, description });
      } else {
        addTask({ id: Date.now(), name, description, isDone: false });
      }
      setName('');
      setDescription('');
    } else {
      alert('Both fields are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      ></textarea>
      <button type="submit">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
