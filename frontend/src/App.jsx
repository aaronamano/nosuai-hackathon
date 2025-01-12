import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [ tasks, setTasks ] = useState(() => {
    /* makes sure that the tasks persist after refresh */
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  const [ newTask, setNewTask ] = useState('')
  const [ newDeadline, setNewDeadline ] = useState('')
  const [ aiText, setAiText ] = useState('Output of AI text')

  /* saves tasks to local storage */
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [ tasks ])

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
          deadline: newDeadline
        }
      ]);
      setNewTask('');
      setNewDeadline('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const prioritizeTask = () => {

  }

  const checkOffTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))

  }

  const editDeadline = (id, newDeadline) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, deadline: newDeadline } : task
    ));
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* This will display the list of tasks and the text output from the AI */}
        <main className="flex-grow flex">

          {/* Displays the todo list */}
          <div className="w-1/2 p-6 overflow-auto">
            <h1 className="text-2xl font-bold mb-4">Prioritize Higher</h1>
            <TodoList tasks={tasks} onDelete={deleteTask} onToggle={checkOffTask} onEdit={editDeadline}/>
          </div>

          {/* Displays the AI's text output */}
          <div className="w-1/2 p-6 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">AI Response</h2>
          </div>

        </main>

        {/* This is the UI where the user can create and add tasks as well as prioritize the tasks */}
        <div className="p-6 bg-white border-t">
          <div className="flex space-x-2">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Enter a task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              value={newDeadline}
              onChange={(e) => setNewDeadline(e.target.value)}
              className="border border-gray-500 rounded-md px-4 py-2"
            />

            {/* Add Button */}
            <button
              onClick={addTask}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add
            </button>

            {/* Prioritize Button */}
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Prioritize
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
