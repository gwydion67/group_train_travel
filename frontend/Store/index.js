import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/UserSlice';
import TripCardSlice from './slice/myTripCardSlice';
import TripCardsSlice from './slice/TripCardsSlice';
const  store = configureStore({
    reducer : {
        user : userSlice , 
       mytripCard : TripCardSlice ,
       tripCards : TripCardsSlice ,  
       

    }
})

export default store 