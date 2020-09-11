import React, { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { ThemeContext } from '../../contexts/ThemeContext'


function TaskForm() {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const { dispatch } = useContext(TaskContext)

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title !== '' && date !== '') {
            dispatch({
                type: 'ADD_TASK',
                task: { title, date }
            })
            setTitle('')
            setDate('')
        }
    }

    return (
        <div class="flex flex-col w-full items-center" style={{ background: theme.ui, color: theme.syntax }}>
            <form class="flex flex-col items-center " onSubmit={handleSubmit} >
                <div class="text-3xl pt-5 pb-3">Add a new task</div>
                <div class="flex items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" >Task</label>
                    </div>

                    <div class="md:w-2/3" >
                        <input class="rounded w-full py-2 px-4 focus:shadow-outline focus:text-black "
                            type="text" placeholder="Task title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                </div>

                <div class="flex items-center mb-6">
                    <div class="md:w-1/3" >
                        <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" >Due Date</label>
                    </div>

                    <div class="md:w-2/3">
                        <input
                            class="rounded w-full py-2 px-4 focus:shadow-outline focus:text-black"
                            type="date"
                            placeholder="Due date"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                </div>

                <div class="flex items-center content-center mb-3">

                    <button class={theme.btn}
                        type="submit"
                        value="Añadir tarea">Add task</button>

                </div>
            </form >
        </div>
    )
}



export default TaskForm