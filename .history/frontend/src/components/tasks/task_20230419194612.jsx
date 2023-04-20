import React from 'react';
import DeleteTaskButton from './deleteTasks';

const Task = ({ tasks }) => {
  const { title, description, status, dateAdded, dueDate } = tasks;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Due Date: {dueDate}</p>
      <button>Edit</button>
      <DeleteTaskButton />
    </div>
  );
};

export default Task;
