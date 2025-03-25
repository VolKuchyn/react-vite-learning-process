import { createSlice } from "@reduxjs/toolkit";

let  initialState = {
    toDoItems: [],
};


const toDoReducer = createSlice({
    name: "toDo",
    initialState,
    reducers: {
        addToDoItem: (state, action) => {
            state.toDoItems.push(action.payload);
        },
        toggleCompletedTodo: (state, action) => {
             const toggleCompleted = state.toDoItems.find((todo) => todo.id === action.payload)
             toggleCompleted.completed = !toggleCompleted.completed;
        },
        deleteToDo: (state, action) => {
            state.toDoItems = state.toDoItems.filter((todo) => todo.id !== action.payload)
        }
    }
})


export default toDoReducer.reducer;
export const { addToDoItem, toggleCompletedTodo, deleteToDo } = toDoReducer.actions;