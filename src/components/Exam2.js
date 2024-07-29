import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice'

export default function Exam2() {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user.user)
  return (
    <div>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <button onClick={()=>dispatch(changeName("LE NAI"))}>Change Name</button>
        <button onClick={()=>dispatch(changeAge(4))}>Change Age</button>
    </div>
  )
}
