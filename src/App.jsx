import './scss/styles.scss'
import { useEffect, useState } from 'react';
import { AppHeader } from './cmps/AppHeader';
import { TaskList } from './cmps/TaskList'

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const handleChange = ({ target }) => {
    setNewTask(target.value)
  }

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) return
    const task = {
      id: Date.now(),
      txt: newTask,
      isComplete: false
    }
    setTaskList([...taskList, task])
    setNewTask('')
  }

  const onRemoveTask = (taskId) => {
    const tasks = taskList.filter(task => task.id !== taskId)
    setTaskList([...tasks])
  }
  const tasksToShow = () => {
    // console.log('filterBy', filterBy);
    let tasks = taskList
    if (filterBy === 'completed') {
      tasks = taskList.filter(task => task.isComplete)
    }
    else if (filterBy === 'active') {
      tasks = taskList.filter(task => !task.isComplete)
    }
    return tasks
  }

  const onCompleteTask = (updatedTask) => {
    updatedTask.isComplete = !updatedTask.isComplete
    const tasks = taskList.map(task => task.id === updatedTask.id ? updatedTask : task)
    setTaskList([...tasks])
  }

  const onClearTasks = () => {
    const tasks = taskList.filter(task => task.isComplete === false)
    setTaskList([...tasks])
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppHeader toggleTheme={toggleTheme} />
      </header>

      <form className="add-todo-container" onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={newTask} placeholder='Create a new todo..' />
      </form>

      <div className="list-container">
        <TaskList tasks={tasksToShow()} onRemoveTask={onRemoveTask} onCompleteTask={onCompleteTask} />

        <footer>
          <div className="items-left">5 items left</div>
          <ul className='clean-list filterby'>
            <li onClick={() => setFilterBy('all')}>All</li>
            <li onClick={() => setFilterBy('active')}>Active</li>
            <li onClick={() => setFilterBy('completed')}>Completed</li>
          </ul>
          <p className='clear-btn' onClick={() => onClearTasks()}>Clear Completed</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
