import { createSlice } from '@reduxjs/toolkit'
import { userInt } from '../interface/user';


const initialState: userInt = {
  name: 'name',
  logged: false
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      state.logged = true
    },
    logOut(state, action) {
      state.logged = false

    }
  }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer


