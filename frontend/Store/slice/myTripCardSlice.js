import { createSlice } from "@reduxjs/toolkit";
import { createTripCardThunk , getTripCardThunk } from "../thunks/card/thunkCard";
const mytripCardSlice = createSlice({
    name: 'mytripCard',
    initialState: {
        mytripCard : null ,
        isLoading: false,
        error: null

    },

    extraReducers(builder) {

       
        builder.addCase(createTripCardThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(createTripCardThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.mytripCard = action.payload;
        });
        builder.addCase(createTripCardThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        

    }
})

export default mytripCardSlice.reducer ;