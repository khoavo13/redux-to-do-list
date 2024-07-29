import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, deleteStudent, rechecked } from '../redux/listSlice'
import Add from './Add'

export default function ToDoList() {
    const dispatch = useDispatch()
    const studentList = useSelector(state=>state.studentList.studentList)
    const [flag, setFlag] = useState("")
    const handle_add = (text) => {
        dispatch(addStudent(text))
    }
    // console.log(studentList)

    const filterList = (list, flag)=>{
        if (flag == 'CHECKED'){
            return list.filter(item => item.checked)
        }
        else if (flag == 'NOCHECKED'){
            return list.filter(item => !item.checked)
        }
        else {
            return list
        }
    }

 
  return (
    <div>
        <Add handle_add={handle_add}/>
        {
            filterList(studentList, flag).map((item, index) => (
                <div key={index}>
                    <input type="checkbox" checked={item.checked} onChange={()=>dispatch(rechecked(item.id))}/>
                    {item.name}
                    <button onClick={()=>dispatch(deleteStudent(item.id))}>Delete</button>
                </div>
            ))
        }
        <button onClick={()=>setFlag("CHECKED")}>CHECKED</button>
        <button onClick={()=>setFlag("NOCHECKED")}>NOCHECKED</button>
        <button onClick={()=>setFlag("CLEAR")}>CLEAR</button>
    </div>
  )
}
