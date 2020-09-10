import { v4 as uuidv4 } from 'uuid'

export const taskReducer = (state, action) =>{
    switch(action.type)
    {
        case 'ADD_TASK' : 
        console.log(action)
            return [...state,
                    {
                        title : action.task.title,
                        date: action.task.date,
                        id: uuidv4()
                    }
                ]

        case 'REMOVE_TASK' :
            return state.filter( task => task.id != action.id)

        default:  return state

    }

}