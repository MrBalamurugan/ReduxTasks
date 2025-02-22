import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/store'
import { addTodo, removeTodo, toggleTodo } from '../Redux/sliceTodos'


const Home = () => {
    const [task, setTask] = useState('')
    const dispatch: AppDispatch = useDispatch()
    const todos = useSelector((state: RootState)=>state.todos.todo)

    const handleClick =() =>{
        if(task.trim()){
            dispatch(addTodo(task))
            setTask('')
        }
    }

  return (
    <div className='container'>
        <h2>ToDos</h2>
            <div className='input-container'>
                <input
                    type='text'
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                    placeholder='enter task...'
                    />
                <button type='submit' onClick={handleClick}>Add</button>
            </div>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span onClick={()=>dispatch(toggleTodo(todo.id))}>{todo.text}</span>
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>Del</button>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Home