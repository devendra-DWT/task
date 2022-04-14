import { createSlice } from "@reduxjs/toolkit";

export const cntrlSlice = createSlice({
    name: "cntrlSlice",
    initialState:{state: false},
    reducers:{
        toggle: (state,action)=>{
            state.state=!state.state

        }
    }
})

export const {toggle} = cntrlSlice.actions
export default cntrlSlice.reducer