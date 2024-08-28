import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleDone, editTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleDone={toggleDone}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
