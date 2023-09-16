import { createSlice } from "@reduxjs/toolkit";
import { getTripCardThunk } from "../thunks/card/thunkCard";
const mytripCardSlice = createSlice({
    name: 'mytripCard',
    initialState: {
      
        tripCards : null,
        isLoading: false,
        error: null

    },

    extraReducers(builder) {

       
        builder.addCase(getTripCardThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getTripCardThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tripCards = action.payload;
        });
        builder.addCase(getTripCardThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        

    }
})

export default mytripCardSlice.reducer ;