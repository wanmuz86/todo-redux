import React from 'react'
import TodoDetail from './TodoDetail'
import {  useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos) // bring out the state
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        <TodoDetail todo={todo} />
                    </li>
                )
                }
            </ul>
        </div>
    )
}

export default TodoList