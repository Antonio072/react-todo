import React, { useContext } from 'react'
import taskList from './TaskList'
import { TaskContext } from '../../contexts/TaskContext'
import { ThemeContext } from '../../contexts/ThemeContext'


function TaskDetail ({task}) {

    const {removeTask} = useContext(TaskContext)

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark


    return(
        <li class="h-48 border-black" 
        style={{ background: theme.ui, color: theme.syntax }} 
        
        class="hover:line-through hover:text-red-600 my-3 px-5  py-3 "onClick={()=> removeTask(task.id)}>
            <div>{task.title}</div>
            <div>{task.date}</div>
            
        </li>
    )
}



export default TaskDetail