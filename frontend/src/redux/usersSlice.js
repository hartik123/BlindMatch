import {createSlice} from '@reduxjs/toolkit'

const usersSlice =  createSlice({
    name: 'users',
    initialState: {
        user: null,
        reloadUser: false,
        allUsers: [],
        allChats: [],
        selectedChat: null,
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
       },
       SetAllChats(state, action){
        state.allChats = action.payload
       },
       SetAllChatsInitial(state, action){
        state.allChats = []
       },
       SetSelectedChat(state, action) {
        state.selectedChat = action.payload
       },
       SetSelectedChatInitial(state, action) {
        state.selectedChat = {}
       }
    }
})

export const {SetUser, ReloadUser, SetInitialUser, SetAllUsers, SetAllUsersInitial, SetAllChats,SetAllChatsInitial, SetSelectedChat, SetSelectedChatInitial} = usersSlice.actions;
export default usersSlice.reducer;