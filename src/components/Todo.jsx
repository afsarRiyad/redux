import React, { useState } from 'react'
import  {addTodo}  from '../features/todoSlice'
import { useDispatch } from 'react-redux'


const Todo = () => {

    const [input, setInput] = useState('')

      const dispatch = useDispatch()

      const handleKey = (e) =>{
               if(e.key === 'Enter'){
                 handleCLick()
               }
      }

      const handleCLick = () =>{
      if(!input.trim()) return
      dispatch(addTodo(input))
      setInput('')
  }

  return (
    <>
    <input type="text"  value={input} onKeyDown={handleKey} onChange={(e)=> {setInput(e.target.value)}}/>
    <button onClick={handleCLick}>Submit</button>
    </>
  )
}

export default Todo