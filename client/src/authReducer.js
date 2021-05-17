import {
    AUTH_ERROR,
    LOAD_USER,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOG_OUT
} from './constants/constants'



const initialState = {
    token: sessionStorage.getItem('token'),
    isLoggedIn: false,
    errors: {}
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            sessionStorage.setItem('token', payload.token);
            return {
                ...state,
                isLoggedIn: true
            }        
        case LOAD_USER:
            sessionStorage.getItem('token');
            return {
                ...state,
                isLoggedIn: true
            }

        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            sessionStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,
                errors: payload

            }
        case LOG_OUT:
            sessionStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false,

            }
        default:
            return state;
    }
}

export default authReducer;