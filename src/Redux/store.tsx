import { configureStore } from "@reduxjs/toolkit";
import slicecurd from "./slicecurd";

export const store = configureStore({
    reducer: {
        curd: slicecurd,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;