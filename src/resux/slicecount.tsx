import { createSlice } from "@reduxjs/toolkit"

interface configCount {
    value: number,
}

const initialState: configCount = {
    value: 0,
}

const slicecount = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        reset: (state)=>{
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = slicecount.actions
export default slicecount.reducer 