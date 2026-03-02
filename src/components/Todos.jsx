import React from 'react'
import { removeTodo } from '../features/todoSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

  return (
    <>
    <ol>
        {
            todos.map(todo =>(
                <li key={todo.id}>{todo.name} <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button></li> 
            ))
        }
    </ol>
    </>
  )
}

export default Todos