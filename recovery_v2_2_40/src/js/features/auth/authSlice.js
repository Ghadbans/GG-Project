import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { 
        data: {
            userName: '',
            role: ''
        },
        loading: true
 },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
            state.loading= false; 
        },
        logOut: (state, action) => {
            state.data = {
                userName: '',
                    role: ''
            }
            state.loading= true;
        }
    },
})

export const { setUser, logOut } = userSlice.actions
export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;