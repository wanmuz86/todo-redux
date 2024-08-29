import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'
const TodoDetail = ({todo}) => {
  const dispatch = useDispatch()
    const handleRemove = () => {
      dispatch(removeTodo(todo.id))

    }
  return (
    <div>
        <h3>{todo.name}</h3>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default TodoDetail