import { configureStore } from "@reduxjs/toolkit";
import slicereducer from './slicecount'

export const store = configureStore({
    reducer: {
        slicereducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch