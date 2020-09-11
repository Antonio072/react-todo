import React, { useContext } from 'react'

import ThemeToggle from './ThemeToggle'

import { ThemeContext } from '../contexts/ThemeContext'
import { TaskContext } from '../contexts/TaskContext'


function Navbar() {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const { tasks } = useContext(TaskContext)

    return (
        <nav class=" flex flex-col w-full h-auto py-3  items-center " style={{ background: theme.ui, color: theme.syntax }}>
            <div class="flex w-full  flex-row place-content-end">
                <ThemeToggle />
            </div>
            <h1 class="text-4xl">Listas de tareas</h1>
            <p>Quedan: {tasks.length}</p>

        </nav>
    )
}

export default Navbar