import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    var [state,setState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    var toggleTheme = () => {
        setState({...state, isLightTheme: !state.isLightTheme})
    }


    return (

        <ThemeContext.Provider value={{ ...state, toggleTheme: toggleTheme }}>


            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider