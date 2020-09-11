import React, { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

import TasksDetails from './TaskDetails'
import { ThemeContext } from '../../contexts/ThemeContext'

function TaskList() {

    const { tasks } = useContext(TaskContext)

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const taskElement = tasks.length ?
        <div >
            <ul>
                {tasks.map(task =>
                    <TasksDetails
                        task={task}
                        key={task.id} />
                )}
            </ul>
        </div>
        : (
            <div class="my-5 text-2xl" >
                <h2>
                    No hay tareas pendientes
                </h2>
            </div>
        )

    return <div class="flex flex-col w-full items-center py-6" style={{ background: theme.ui, color: theme.syntax }}>{taskElement}</div>
}



export default TaskList