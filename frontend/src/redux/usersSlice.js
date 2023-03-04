import {createSlice} from '@reduxjs/toolkit'

const usersSlice =  createSlice({
    name: 'users',
    initialState: {
        user: null,
        reloadUser: false,
        allUsers: []
    },
    reducers: {
       SetUser(state, action) {
        state.user = action.payload;
       },
       ReloadUser(state,action) {
        state.reloadUser = action.payload
       },
       SetInitialUser(state, action) {
        state.user = null
       },
       SetAllUsers(state, action){
        state.allUsers = action.payload
       },
       SetAllUsersInitial(state, action){
        state.allUsers = []
       }
    }
})

export const {SetUser, ReloadUser, SetInitialUser, SetAllUsers, SetAllUsersInitial} = usersSlice.actions;
export default usersSlice.reducer;