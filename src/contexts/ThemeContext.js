import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    var [state, setState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee', btn: 'btn shadow hover:bg-white hover:text-gray-600 rounded h-10 px-3 mx-3 bg-gray-600 text-white' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555',  btn: 'btn shadow hover:bg-gray-600 hover:text-white rounded h-10 px-3 mx-3  bg-white text-gray-600' }
    })

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