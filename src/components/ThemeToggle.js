import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function ThemeToggle(){

    
    const { toggleTheme } =  useContext(ThemeContext)
    
    return(
        
        <button class="btn bg-blue-600 hover:bg-blue-300"onClick={toggleTheme}>Modo oscuro</button>
    )
}

export default ThemeToggle