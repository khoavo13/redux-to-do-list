import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countAdd, countDown, countUp } from '../redux/countSlice'

export default function Exam1() {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count.value)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(countUp())}>Count Up</button>
        <button onClick={()=>dispatch(countDown())}>Count Down</button>
        <button onClick={()=>dispatch(countAdd(5))}>Count add</button>
    </div>
  )
}
