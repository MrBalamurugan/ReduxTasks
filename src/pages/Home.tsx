import '../App.css'
import { AppDispatch, RootState } from '../resux/store'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../resux/slicecount'


const home = () => {
    const dispatch: AppDispatch = useDispatch()
    const count = useSelector((state: RootState)=>state.slicereducer.value)

    const Incre = () =>{
        dispatch(increment())
    }
    const Decre = () =>{
        dispatch(decrement())
    }
    const Reset = () =>{
        dispatch(reset())
    }

    return (
    <div className="container">
        <div><h2>Counter: {count}</h2></div>
        <div className='home'>
            <div><button type='submit' onClick={Incre}>+</button></div>
            <div><button type='submit' onClick={Decre}>-</button></div>
            <div><button type='submit' onClick={Reset}>0</button></div>
        </div>
    </div>
  )
}

export default home