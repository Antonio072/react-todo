import React, { useEffect, createContext, useState } from 'react';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    var [state, setState] = useState(
        () => {
            const theme = localStorage.getItem('theme')
            return theme ? JSON.parse(theme): 
            {
                isLightTheme: true,
                light: { syntax: '#555', ui: '#ddd', bg: '#eee', btn: 'btn shadow hover:bg-white hover:text-gray-600 rounded h-10 px-3 mx-3 bg-gray-600 text-white' },
                dark: { syntax: '#ddd', ui: '#333', bg: '#555', btn: 'btn shadow hover:bg-gray-600 hover:text-white rounded h-10 px-3 mx-3  bg-white text-gray-600' }
            }
        }
    )

    useEffect(
        () => {
            localStorage.setItem('theme', JSON.stringify(state))
        },
        [state]
    )


    var toggleTheme = () => {
        document.body.classList.add('dark');
        setState({ ...state, isLightTheme: !state.isLightTheme })
    }

    return (

        <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider