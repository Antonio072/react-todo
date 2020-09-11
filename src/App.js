import React from 'react';
import './App.css';

import ThemeContextProvider from './contexts/ThemeContext';
import TaskContextProvider from './contexts/TaskContext';

import Navbar from './components/Navbar'
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
     
       
      </ThemeContextProvider>

    </div>
  );
}

export default App;
