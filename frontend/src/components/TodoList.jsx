import React from 'react'

function TodoList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="flex items-center justify-between bg-white p-3 rounded shadow">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />

            <label
              htmlFor={`task-${task.id}`}
              className={`${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </label>

          </div>

          <div className="flex space-x-2">
            <input
              type="date"
              value={task.deadline || ''}
              onChange={(e) => onEdit(task.id, e.target.value)}
            />

            <button
              onClick={() => onDelete(task.id)}
              className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>

        </li>
      ))}
    </ul>
  )
}

export default TodoList
