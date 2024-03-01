import { createSlice } from '@reduxjs/toolkit'
import { toDo } from '../interface/todo'

const initialState: { todos: toDo[] } = {
  todos: []
}


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    deleteTodo(state, action) {
      const { todos } = state
      const { payload } = action
      for (let i in todos) {

        if (todos[i].id === payload) {
          todos.splice(Number(i), 1);
        }
        return void todos
      }
    },
    updateToDo(state, action) {
      const { todos } = state
      const { payload } = action

      for (let i in todos) {
        if (todos[i].id === payload.id) {
          todos[i].text = payload.text
        }
      }

    },
    checkIt(state, action) {
      const { todos } = state
      const { payload } = action

      for (let i in todos) {
        let c = Number(i)
        if (todos[i].id === payload.id) {
          console.log(todos[i]);
          todos[i].done = true

        }
      }
    }
  }
});

export const { addTodo, deleteTodo, updateToDo, checkIt } = todoSlice.actions

export default todoSlice.reducer