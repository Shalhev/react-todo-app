import './scss/styles.scss'
import { useState } from 'react';
import { AppHeader } from './cmps/AppHeader';
import { TaskList } from './cmps/TaskList'

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [isDark, setIsDark] = useState(false);

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


  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      <form className="add-todo-container" onSubmit={addTask}>
        <input type="text" onChange={handleChange} value={newTask} placeholder='Create a new todo..' />
      </form>

      <TaskList tasks={tasksToShow()} onRemoveTask={onRemoveTask} onCompleteTask={onCompleteTask} />

      <ul className='clean-list flex justify-center filterby'>
        <li onClick={() => setFilterBy('all')}>All</li>
        <li onClick={() => setFilterBy('active')}>Active</li>
        <li onClick={() => setFilterBy('completed')}>Completed</li>
      </ul>
      <p className='flex auto-center' onClick={() => onClearTasks()}>Clear Completed</p>

    </div>
  );
}

export default App;
