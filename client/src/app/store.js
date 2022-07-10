import {configureStore} from '@reduxjs/toolkit';
import todosReducer from '../appSlice';

export const store = configureStore({
    reducer:{
        todos: todosReducer,
    }
});