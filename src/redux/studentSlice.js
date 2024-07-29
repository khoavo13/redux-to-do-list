import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    student: {
        name: "Le Meo Gia",
        math: 5,
        pro: 3,
        avg: 0
    },
    checked: true,
}

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        changeAvg(state){
            state.student.avg = (state.student.math + state.student.pro) / 2;
        },
        rechecked(state){
            state.checked = !state.checked
        }
    }
})

export const {changeAvg, rechecked} = studentSlice.actions;
export default studentSlice.reducer