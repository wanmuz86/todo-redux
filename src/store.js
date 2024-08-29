import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'

export const store = configureStore({

    // this is where all the reducer will be defined, you might have more than reducer
    reducer: {
        todos:todoReducer
    }
    // We will define middleware later, where are going intercept the request
})