import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import userReducer  from "./userSlice";
import studentSlice from "./studentSlice";
import listSlice from "./listSlice";

const store = configureStore({
    reducer: {
        count: countReducer,
        user: userReducer,
        student: studentSlice,
        studentList: listSlice,
    }
})
export default store;