import {createSlice} from '@reduxjs/toolkit'

const usersSlice =  createSlice({
    name: 'users',
    initialState: {
        user: null,
        reloadUser: false,
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
       }
    }
})

export const {SetUser, ReloadUser, SetInitialUser} = usersSlice.actions;
export default usersSlice.reducer;