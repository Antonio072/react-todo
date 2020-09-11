import React, { useContext } from 'react'
import taskList from './TaskList'
import { TaskContext } from '../../contexts/TaskContext'
import { ThemeContext } from '../../contexts/ThemeContext'


function TaskDetail({ task }) {

    const { dispatch } = useContext(TaskContext)



    


    return (
        <li class="hover:line-through hover:text-red-600 my-3 px-5  py-3 w-64 " 
            onClick={() => dispatch({ type: 'REMOVE_TASK',id:task.id })}>
            <div>{task.title}</div>
            <div>{task.date}</div>

        </li>
    )
}



export default TaskDetail