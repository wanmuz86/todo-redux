import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'
import loggerMiddleware from "./middleware/loggerMiddleware";

export const store = configureStore({

    // this is where all the reducer will be defined, you might have more than reducer
    reducer: {
        todos:todoReducer
    },
    // We will define middleware later, where are going intercept the request

    // Add the new middeware at the end of existing middleware
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})