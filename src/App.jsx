import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [tasks, setTasks] = useState([]);
      const [inputValue, setInputValue] = useState('');

      const addTask = () => {
        if (inputValue.trim()) {
          setTasks([...tasks, { text: inputValue, completed: false }]);
          setInputValue('');
        }
      };

      const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };

      const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
      };

      return (
        <div className="app">
          <h1>To-Do List</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTask}>Add Task</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} style={{ textDecoration: task.completed ? 'line-through' : '' }}>
                {task.text}
                <button onClick={() => toggleComplete(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
