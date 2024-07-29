import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAvg, rechecked } from '../redux/studentSlice'

export default function Exam3() {
    const student = useSelector(state => state.student.student)
    const checked = useSelector(state => state.student.checked)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Name: {student.name}</h1>
        <h1>Math: {student.math}</h1>
        <h1>Pro: {student.pro}</h1>
        <h1>Avg: {student.avg}</h1>
        <h1>Checked: {checked? "true" : "false"}</h1>
        <button onClick={()=>dispatch(rechecked())}>Rechecked</button>
        <button onClick={()=>dispatch(changeAvg())}>Avg</button>
    </div>
  )
}
