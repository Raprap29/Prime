import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://localhost:5000/';

export const gameApi = createApi({
    reducerPath: 'gameAuth',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    endpoints: (builder) => ({
        gameupload: builder.mutation({
            query: (game) =>({
                url: '/gameupload',
                method: 'POST',
                body: game,
            })
        }),
        register: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    })
})

export const { useRegisterMutation, useLoginMutation, useGameuploadMutation } = gameApi;