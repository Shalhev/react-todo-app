import './scss/styles.scss'
import { useState } from 'react';
import { AppHeader } from './cmps/AppHeader';
import { TaskList } from './cmps/TaskList'

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const handleChange = ({ target }) => {
    setNewTask(target.value)
  }

  const addTask = () => {
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
    if (filterBy === 'complete') {
      tasks = taskList.filter(task => task.isComplete)
    }
    else if (filterBy === 'active') {
      tasks = taskList.filter(task => !task.isComplete)
    }
    return tasks
  }


  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
      </header>
      <input type="text" onChange={handleChange} value={newTask} placeholder='Create a new todo..' />
      <button onClick={() => addTask()} >Add</button>
      <TaskList tasks={tasksToShow()} onRemoveTask={onRemoveTask} />

      <ul className='clean-list flex justify-center filterby'>
        <li onClick={() => setFilterBy('all')}>All</li>
        <li onClick={() => setFilterBy('active')}>Active</li>
        <li onClick={() => setFilterBy('complete')}>Complete</li>
      </ul>

    </div>
  );
}

export default App;
