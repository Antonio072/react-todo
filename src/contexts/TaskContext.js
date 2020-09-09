import React, { createContext, useState} from 'react'

export const TaskContext = createContext()

const TaskContextProvider = (props) =>{

    const [ tasks, setTasks] = useState([
        {title: "Tarea 1", date: "07-08", id:1},
        {title: "Tarea 2", date: "07-08", id:2},
        {title: "Tarea 3", date: "07-08", id:3},
        {title: "Tarea 4", date: "07-08", id:4},
    ])

    const addTask = (title, date) =>{
        setTasks([...tasks, { title , date }])
    }

    const removeTask = (id) =>{
        setTasks(tasks.filter( task => task.id != id))
    }

    return (
    <TaskContext.Provider value={{tasks, addTask, removeTask}}>
        {props.children}
    </TaskContext.Provider>
    )
}

export default TaskContextProvider