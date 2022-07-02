import React,{useReducer} from 'react'

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'check':
            return {
                ...state,
                checkOn: !state.checkOn
            }
            break;
        case 'edit':
            payload.inputElement.current.value= payload.todoTitle 
            payload.inputElement.current.focus()
            return {
                ...state,
                editOn: !state.editOn
            }
        default:
            break;
    }
}


const Todo = ({todo, index, inputElement}) => {

    const initialState = {
        todoTitle: todo.todoTitle,
        checkOn: todo.checkOn,
        editOn: todo.editOn    
    }

    const [{todoTitle, checkOn, editOn}, dispatch] = useReducer(reducer, initialState)


  return (
    <li>
        {checkOn ? <p>{todoTitle}</p> : <h1>{todoTitle}</h1>}
        <input type="checkbox" value={checkOn} onChange={() => dispatch({type:'check', payload:todo})}/>
        {editOn ? <button onClick={() => dispatch({type:'edit'})}>cancel</button> : <button onClick={() => dispatch({type:'edit', payload:{inputElement:inputElement, todoTitle:todoTitle}})}>edit</button>}
    </li>  )
}

export default Todo