import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        countUp(state){
            state.value += 1
        },
        countDown(state){
            state.value -= 1
        },
        countAdd(state, action){
            state.value += action.payload
        }
    }

})

export const {countDown, countUp, countAdd} = countSlice.actions;
export default countSlice.reducer;