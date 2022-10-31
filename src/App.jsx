import './App.css';
import { useState } from 'react';
import { AppHeader } from './cmps/AppHeader';
import { TaskList } from './cmps/TaskList'

function App() {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('');

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


  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
        To Do App
      </header>
      <input type="text" onChange={handleChange} value={newTask} />
      <button onClick={() => addTask()} >Add</button>
      <TaskList tasks={taskList} onRemoveTask={onRemoveTask} />

    </div>
  );
}

export default App;
