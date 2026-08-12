import { configureStore } from "@reduxjs/toolkit"
import authApi from './api/apiSlice'
import userReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authApi.middleware),
})

export default store;
