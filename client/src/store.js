import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './authReducer'
import { composeWithDevTools } from 'redux-devtools-extension'


const middleWare = [thunk];

const initialState = {};

const store = createStore(
    authReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))

);

export default store;