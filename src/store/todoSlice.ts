import { createSlice, nanoid } from "@reduxjs/toolkit";
import { TaskModel } from "./task";

const initialState: TaskModel[] = [];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("payload: ", action.payload)
            const todo: TaskModel = {
                id: nanoid(),
                name: action.payload,
                isDone: false
            }

            state.push(todo);
        },

        deleteTodo: (state, action) => {
            state = state.filter(todo => todo.id !== action.payload)
            return state;
        },

        markDone: (state, action) => {
            state.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
            })
        },

        undoTask: (state, action) => {
            state.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.isDone = false;
                }
            })
        },

        deleteAllMarked: (state) => {
            state = state.filter(task => !task.isDone);
            return state;
        }
    }
})

export const {addTodo, deleteTodo, markDone, undoTask, deleteAllMarked} = todoSlice.actions;

export default todoSlice.reducer;