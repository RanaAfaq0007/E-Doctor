import { configureStore } from "@reduxjs/toolkit";
import likeReducer from './likeSlice.js';
import userReducer from './userSlice.js';
const store = configureStore({
    reducer:{
        like:likeReducer,
        user:userReducer,
    }
});

export default store ;