import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        {
            id: 0,
            text: "testing"
        }
    ]
}


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.unshift(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const  {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer