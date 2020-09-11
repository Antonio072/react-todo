import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

function ThemeToggle() {


    const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark


    return (
        <button class={theme.btn} onClick={toggleTheme}>
            {isLightTheme ? 'Modo oscuro' : 'Modo claro'}
        </button>
    )
}

export default ThemeToggle