import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            userName: '',
            role: ''
        },
        loading: true,
        isHibernating: false
    },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        logOut: (state, action) => {
            state.data = {
                userName: '',
                role: ''
            }
            state.loading = true;
        },
        setHibernating: (state, action) => {
            state.isHibernating = action.payload;
        }
    },
})

export const { setUser, logOut, setHibernating } = userSlice.actions
export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;