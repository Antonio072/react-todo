import React, { useContext, useEffect } from 'react';

import { ThemeContext } from '../contexts/ThemeContext'


function Task(props) {
    var name = props.name
    var deleteTask = props.deleteTask

    var  contextType = useContext(ThemeContext)

    const {isLightTheme, light, dark} = contextType
    const theme = isLightTheme ? light : dark

    useEffect(()=>{return () => console.log('unmounting...')},[])

    return (

            <div  style={{ background: theme.ui, color: theme.syntax}} class="list flex justify-around mt-3">
                <li class="px-4 py-1  m-2">{name.id}</li>
                <li class="px-4 py-1  m-2">{name.name}</li>
                <div class="text-center px-4 py-2 m-2"><button class="" onClick={(ev) => deleteTask(name.id, ev)} style={{ justifySelf: 'end' }}>Edit</button>
                </div>
                <div class="text-center px-4 py-2 m-2"> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(ev) => deleteTask(name.id, ev)} style={{ justifySelf: 'end' }}>Delete</button>
                </div>
            </div>
    )

}

export default Task