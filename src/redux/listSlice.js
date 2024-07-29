import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    studentList: [
        {id: 1, name: "Le Meo", checked: false},
        {id: 2, name: "Le Nai", checked: true},
        {id: 3, name: "Le Ga", checked: false}
    ],
    checkedAll: false
}

const listSlice = createSlice({
    name: "studentList",
    initialState,
    reducers: {
        addStudent(state, action){
            state.studentList = [...state.studentList , {id: 4, name: action.payload, checked: false}]
        },
        deleteStudent(state, action){
            state.studentList = state.studentList.filter(item => item.id !== action.payload)
        },
        rechecked(state, action) {
        
            state.studentList= state.studentList.map((item) =>
                item.id === action.payload ? { ...item, checked: !item.checked } : item
              );
        }
    }
})

export const {addStudent, deleteStudent, rechecked} = listSlice.actions
export default listSlice.reducer