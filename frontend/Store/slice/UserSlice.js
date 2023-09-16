import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../thunks/auth/thunkAuth";
TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0ODU3NDg3LCJpYXQiOjE2OTQ4NTU2ODcsImp0aSI6IjM4YWQyM2YxZjZkMjQzMDA5MjZiOTk5MjM1YmY2YjQxIiwidXNlcl9pZCI6Mn0.APxN5UKHQhmZpr-_0hNTHXWYZOtkTuRtWbswQE_fKrA"
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NDkyOTIyNSwiaWF0IjoxNjk0ODQyODI1LCJqdGkiOiI2NjI5ZjlhNzdiNzQ0MjliYTliODI3YmI4NmQyYTIxYiIsInVzZXJfaWQiOjJ9.qc-hiUvPCWQ_ov4hAYlKRwElV0dvKosiQp0YyM6ZQ94",
            "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0ODQ0NjI1LCJpYXQiOjE2OTQ4NDI4MjUsImp0aSI6IjExYWFlMzE3ODk4ZjQ5NDQ4N2M4NThiYzM1NDNlNDUyIiwidXNlcl9pZCI6Mn0.6AtWVPEgAL4wQS4g-GktBWRTSakn2mumDHdPR4Cxr-4",
            "id": 2,
            "username": "RanjaySingh",
            "email": "ranjayforever@email.com",
            "_id": 2,
            "name": "RanjaySingh",
            "isAdmin": true,
            "token": TOKEN
        },
        isLoading: false,
        error: null

    },

    extraReducers(builder) {

        // login 
        builder.addCase(loginThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload;
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        // register 
        builder.addCase(registerThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload;
        });
        builder.addCase(registerThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export default userSlice.reducer