import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    // The name of the configuration/ slice
    name:'todos',
    /// The state is stored
    initialState:{todos:[]},

    // The action/methods called by the components is defined
    reducers: {
        addTodo: (state,action) => {
            state.todos.push(action.payload)
           // state.todos = [...state.todos, action.payload]

        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(val=> val.id !== action.payload)
        }
    }
});

// You need to export the function individually (to be used in the components)
export const {addTodo, removeTodo} = todoSlice.actions
// export the reducer (to be used in the store)
export default todoSlice.reducer