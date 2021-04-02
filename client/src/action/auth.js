import axios from 'axios';
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    LOAD_USER,
    LOG_OUT
} from '../constants/constants'

import { setToken } from '../setToken'

export const loadUser = () => async dispatch => {
    if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
    }
    
    try {
        const response = await axios.get('http://localhost:4000/app');

        dispatch({
            type: LOAD_USER,
            payload: response.data
        })

    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error})
    } 

}

export const registerUser = (fullname, username, email, password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const body = JSON.stringify({fullname, username, email, password})


        const response = await axios.post('http://localhost:4000/app/signup', body, config)
        

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser());

    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error })
    }

}

export const loginUser = (email, password) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const body = JSON.stringify({email, password})



        const response = await axios.post('http://localhost:4000/app/signin', body, config)
        




        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser());

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error })
    }

}

export const logOut = () => async dispatch => {
    dispatch({
        type: LOG_OUT
    })
}