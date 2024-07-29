import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: "LE MEO",
        age: 3
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName(state, action){
            state.user.name = action.payload
        },
        changeAge(state, action){
            state.user.age = action.payload
        }
    }
})

export const {changeAge, changeName} = userSlice.actions;
export default userSlice.reducer