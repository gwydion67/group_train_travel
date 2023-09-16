import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
const BACKEND_URL = "http://10.0.2.2:8000";

const loginThunk = createAsyncThunk('userLogin/fetch', async ({ email, password }) => {
   
    try {


        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const credentials = {
            'username': email,
            'password': password
        }
       
       const  { data } = await axios.post(`${BACKEND_URL}/user/login/`, credentials, config);
      
        await AsyncStorage.setItem('userInfo', JSON.stringify(data))
        return data;
    
    }
    catch (err) {
        console.warn('err', err)
    }
   

});


const registerThunk = createAsyncThunk('userRegister/fetch', async ({ email, password }) => {
    try {


        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const credentials = {
            'username': email,
            'password': password
        }

        const { data } = await axios.post(`${BACKEND_URL}/register/`, credentials, config);
        await AsyncStorage.setItem('userInfo', JSON.stringify(data))

    }
    catch (err) {
        console.warn('err', err)
    }
    return data;
});



export { loginThunk, registerThunk }