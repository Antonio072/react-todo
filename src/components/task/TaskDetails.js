import React, { useContext } from 'react'
import taskList from './TaskList'
import { TaskContext } from '../../contexts/TaskContext'
import { ThemeContext } from '../../contexts/ThemeContext'


function TaskDetail({ task }) {

    const { dispatch } = useContext(TaskContext)

    return (
        <li class="hover:line-through border-solid border-b-4 border-white hover:text-red-600 px-5  py-3 min-w-full " 
            onClick={() => dispatch({ type: 'REMOVE_TASK',id:task.id })}>
            <div class="text-lg">{task.title}</div>
            <div>{task.date}</div>
        </li>
    )
}



export default TaskDetail