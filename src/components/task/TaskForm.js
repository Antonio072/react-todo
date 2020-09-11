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

        dispatch({
            type: 'ADD_TASK',
            task: {title,date}
        })
        setTitle('')
        setDate('')
    }

    return (
        <form class="w-full max-w-sm" onSubmit={handleSubmit} style={{ background: theme.ui, color: theme.syntax }}>
            <div class="flex items-center mb-6" style={{ background: theme.ui, color: theme.syntax }}>

                <div class="md:w-1/3">
                    <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Task</label>
                </div>

                <div class="md:w-2/3" style={{ background: theme.ui, color: theme.syntax }}>
                    <input
                        class=" appearance-none border-2 
                                   rounded w-full py-2
                                     px-4 leading-tight 
                                     focus:outline-none
                                     "
                        type="text" placeholder="Task title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </div>
            </div>

            <div class="flex items-center mb-6">
                <div class="md:w-1/3" style={{ background: theme.ui, color: theme.syntax }}>
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Due Date</label>
                </div>

                <div class="md:w-2/3">
                    <input
                        class="appearance-none border-2 
                                   rounded w-full py-2
                                     px-4 
                                     focus:outline-none 
                                    focus:border-purple-500"
                        type="date"
                        placeholder="Due date"
                        value={date}
                        onChange={(e) => { setDate(e.target.value) }} />
                </div>
            </div>

            <div class="flex items-center content-center mb-3">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">

                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        value="Añadir tarea">Add task</button>
                </div>
            </div>
        </form >
    )
}



export default TaskForm