import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice';

const Add = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTodoPressed = () => {
    dispatch(addTodo({ id: Date.now(), name: text }))

  }
  return (
    <div>
      <h2>Add new Todo</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodoPressed}>Add To do</button>
    </div>
  )
}

export default Add