import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const apiUrl = 'http://192.168.0.200:8080';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        })
    })
})
export const { useLoginMutation } = authApi;
export default authApi;