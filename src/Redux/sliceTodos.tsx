import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todos {
    id: number,
    text: string,
    completed: boolean
}

interface Todo {
    todo: Todos[]
}

const initialState: Todo ={
  todo: []
}

const slicetodos = createSlice({
  name: "todos",
  initialState,
  reducers: {
        addTodo: (state, action: PayloadAction<string>)=>{
                state.todo.push({
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                })
        },

        toggleTodo: (state, action: PayloadAction<number>)=>{
                const todos = state.todo.find((t)=> t.id === action.payload)
                if(todos){
                    todos.completed = !todos.completed
                }
        },  

        removeTodo: (state, action: PayloadAction<number>)=>{
                state.todo = state.todo.filter((t)=> t.id !== action.payload)
        },
        
  }
})

export const {addTodo, toggleTodo, removeTodo} = slicetodos.actions;
export default slicetodos.reducer;