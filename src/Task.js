import React from 'react';

function Task({ task, onToggle, onDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default Task;
