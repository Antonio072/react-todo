import React, {useContext} from 'react'
import { TaskContext } from '../../contexts/TaskContext'

import TasksDetails from './TaskDetails'
import { ThemeContext } from '../../contexts/ThemeContext'

function TaskList () {

    const { tasks } = useContext(TaskContext)


    return tasks.length ? 
    <div>
        <ul>
            {tasks.map(task => 
                    <TasksDetails
                    task={task} 
                    key={task.id}/>
            )}
        </ul>
    </div>
    :(
        <div>
            No hay libros
        </div>
    )
}



export default TaskList