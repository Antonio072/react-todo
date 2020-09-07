import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'

import Task from './components/task'

const style = {
  ul:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
function App() {



  var [names, setNames] = useState([
    { name: "Primera tarea", id: 1 },
    { name: "Segunda tarea", id: 2 },
    { name: "Tercera tarea", id: 3 },
    { name: "Cuarta tarea", id: 4 },
    { name: "Quinta tarea", id: 5 },])


    useEffect(()=>
    {
      console.log("Hubo cambio")
    },[names])

  var [newTask, setNewTask] = useState("")

  var handleClick = (id, ev) => {
    console.log(id)

    setNames(names => names.filter((name) => name.id !== id))
    console.log(names.filter((name) => name.id !== id))
  }

  var handleSubmit = (ev) => {
    ev.preventDefault();
    setNames([...names, { name: newTask, id: names.lenght }])
  }

  var handleNewTaskChange = (ev) => {
    ev.preventDefault()
    setNewTask(ev.target.value)
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <p>
          A simple todo app
        </p>

        <form onSubmit={(ev) => handleSubmit(ev)}>
          <input type="text" onChange={(ev) => handleNewTaskChange(ev)}></input>
          <button type="submit" name="Tasks" placeholder="Add new tasks">Add task</button>
        </form>

        <ul style={style.ul}  class="list-disc">
          {names.map((name) => <Task key={name.id} name={name} deleteTask={handleClick.bind(this)}></Task>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
