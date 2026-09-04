import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { 
        data: {
            userName: '',
            role: '',
            selectedBranch: null
        },
        loading: true
 },
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            if (action.payload && action.payload.userName) {
                try { localStorage.setItem('currentUserName', action.payload.userName); } catch (e) {}
            }
        },
        setBranch: (state, action) => {
            if (state.data) {
                state.data.selectedBranch = action.payload;
            }
        },
        logOut: (state, action) => {
            state.data = {
                userName: '',
                role: '',
                selectedBranch: null
            };
            state.loading = true;
            try { localStorage.removeItem('currentUserName'); } catch (e) {}
        }
    },
})

export const { setUser, setBranch, logOut } = userSlice.actions
export const selectCurrentUser = (state) => state.user;
export default userSlice.reducer;