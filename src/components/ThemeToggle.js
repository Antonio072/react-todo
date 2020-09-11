import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function ThemeToggle(){

    
    const { toggleTheme } =  useContext(ThemeContext)
    
    return(
        
        <button class="btn" style={{position:'relative', top:'5%', right:'45%'}} onClick={toggleTheme}>Modo oscuro</button>
    )
}

export default ThemeToggle