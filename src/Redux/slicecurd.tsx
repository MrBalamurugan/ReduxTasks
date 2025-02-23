import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface user {
    id: number,
    name: string,
    email: string
}

interface users {
    users: user[]
}

const initialState: users = {
    users: []
}

const slicecurd = createSlice({
    name: 'curd',
    initialState,
    reducers: ({
        addUser: (state, action: PayloadAction<user>)=>{
            state.users.push(action.payload)
        },
        updateUser: (state, action: PayloadAction<user>)=>{
            const index = state.users.findIndex((user)=>user.id === action.payload.id)
            if(index !== -1){
                state.users[index] = action.payload
            }
        },
        removeUser: (state, action: PayloadAction<number>)=>{
            state.users = state.users.filter((user)=>user.id !== action.payload)
        },
    })
})

export const {addUser, updateUser, removeUser} = slicecurd.actions;
export default slicecurd.reducer;

