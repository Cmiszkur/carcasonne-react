import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const serverAPI = createApi({
    reducerPath: 'serverAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),
    endpoints: (builder) => ({
        getUsername: builder.query({
            query: () => ({url: 'check', credentials: 'include'})
        })
    })
})

export const { useGetUsernameQuery } = serverAPI