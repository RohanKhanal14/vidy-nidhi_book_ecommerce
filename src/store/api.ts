// using rtk-query

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'// Replace with your actual API URL

export const api = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials:'include',
    }),
    tagTypes:['User'],
    // This is where you can define your endpoints
    // For example, you can create an endpoint for fetching user data
    // localhost:8000/api/user - baseurl/endpoint
    endpoints:(builder) => ({})
});