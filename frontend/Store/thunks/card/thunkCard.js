import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
const BACKEND_URL = "http://10.0.2.2:8000";



const createTripCardThunk = createAsyncThunk('tripCardPost/fetch', async (formContent , {getState } ) => {
    try {
        const {
            user : {userInfo}
        } = getState()
// console.log(userInfo.token , formContent)
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
      
        const { data } = await axios.post(`${BACKEND_URL}/create/tripCard/`,formContent, config);
        console.log(data)
        await AsyncStorage.setItem('tripCard', JSON.stringify(data))
        return data;

    }
    catch (err) {
        console.warn(err.response.data.detail )
    }
    
});


const getTripCardThunk = createAsyncThunk('tripCardGet/fetch', async (formContent , {getState } ) => {
    try {
        const {
            user : {userInfo}
        } = getState()
// console.log(userInfo.token , formContent)
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
      
        const { data } = await axios.get(`${BACKEND_URL}/tripCards/`, config);
        
console.log(data  , 'fa')
return data;
    }
    catch (err) {
        console.warn(err.response.data.detail )
    }
   
});



export {createTripCardThunk , getTripCardThunk }