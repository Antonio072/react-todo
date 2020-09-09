import React from 'react';
import './App.css';

import Navbar from './components/Navbar'

import Task from './components/task'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import TaskContextProvider from './contexts/TaskContext';
import TaskList from './components/task/TaskList';
import TaskForm from './components/task/TaskForm';

function App() {



  return (
    <div class="container flex flex-col items-center mx-auto my-3">
      <ThemeContextProvider >

        <TaskContextProvider>

          <Navbar />
          <TaskList/>
          <TaskForm/>

        </TaskContextProvider>
        <ThemeToggle />
       
      </ThemeContextProvider>

    </div>
  );
}

export default App;
