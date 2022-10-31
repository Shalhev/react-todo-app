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

  return (
    <div className="App">
      <header className="App-header">
        <AppHeader />
        To Do App
      </header>
      <input type="text" onChange={handleChange} />
      <button onClick={() => { setTaskList([...taskList, newTask]) }} >Add</button>
      <TaskList tasks={taskList} />
      <p>
        {newTask}
      </p>
    </div>
  );
}

export default App;
