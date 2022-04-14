import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./slices/todoslice"
import  cntrlReduc  from './slices/tablecntrlSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        toggle: cntrlReduc,
    },
})