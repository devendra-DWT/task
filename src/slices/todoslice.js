import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState: { state: [] },
    reducers: {
        add: (state, action) => {
            // console.log(action)
            state.state.push(action.payload)
        },

        
        deleteAc: (state, action) => {
            console.log("helloo", action.payload.rand)
            const arr = state.state.filter((el) => {
                return el.rand !== action.payload.rand
            })
            state.state = [...arr]
        },


        editTodo: (state, action) => {
            let forEdit = state.state.filter((el) => {
                return el.rand != action.payload.el.task
            })

            let editFind= state.state.find((el)=>{
                return el.rand== action.payload.el.rand
            })
            editFind.task=action.payload.edit
            

        }
    }
})

export const { add, deleteAc, editTodo } = todoSlice.actions
export default todoSlice.reducer