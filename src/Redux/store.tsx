import { configureStore } from "@reduxjs/toolkit";
import slicetodos from '../Redux/sliceTodos'

export const store = configureStore({
    reducer: {
        todos: slicetodos
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
