import React from 'react'

const TodoDetail = () => {
    const handleRemove = () => {

    }
  return (
    <div>
        <h3>Item Name</h3>
        <button onChange={handleRemove}>Remove</button>
    </div>
  )
}

export default TodoDetail