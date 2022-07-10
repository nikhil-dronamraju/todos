import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    getStatus: 'idle',
    postStatus: 'idle',
    putStatus: 'idle',
    deleteStatus: 'idle',
    todos: []
};


export const getRequest = createAsyncThunk('todos/getReq', async () => {
    try{
        const response = await axios.get('http://localhost:1312/api/todos/');
        return response.data;
    }
    catch(err){
        return err;
    }
});

export const postRequest = createAsyncThunk('todos/postReq', async (body) => {
    try{
        const response = await axios.post('http://localhost:1312/api/todos/', body);
        return response.data;
    }
    catch(err){
        return err;
    }
});

export const putRequest = createAsyncThunk('todos/putReq', async (body) => {
    const {id, todo, deadline} = body;
    try{
        const response = await axios.put(`http://localhost:1312/api/todos/${body.id}`, body);
        return response.data;
    }
    catch(err){
        return err;
    }
});

export const deleteRequest = createAsyncThunk('todos/deleteReq', async (body) => {
    const {id, todo, deadline} = body;
    try{
        const response = await axios.delete(`http://localhost:1312/api/todos/${body.id}`);
        return response.data;
    }
    catch(err){
        return err;
    }
});

const appSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(getRequest.pending, (state, action) => {
            state.getStatus = 'pending';
        })
        .addCase(getRequest.rejected, (state, action) => {
            state.getStatus = 'rejected';
        })
        .addCase(getRequest.fulfilled, (state, action) => {
            state.getStatus = 'fulfilled';
            state.todos = action.payload;
        })

        .addCase(postRequest.pending, (state, action) => {
            state.postStatus = 'pending';
        })
        .addCase(postRequest.rejected, (state, action) => {
            state.postStatus = 'rejected';
        })
        .addCase(postRequest.fulfilled, (state, action) => {
            state.postStatus = 'fulfilled';
            state.todos.push(action.payload);
        })

        .addCase(putRequest.pending, (state, action) => {
            state.putStatus = 'pending';
        })
        .addCase(putRequest.rejected, (state, action) => {
            state.putStatus = 'rejected';
        })
        .addCase(putRequest.fulfilled, (state, action) => {
            state.puttStatus = 'fulfilled';
            state.todos = action.payload;
        })

        .addCase(deleteRequest.pending, (state, action) => {
            state.deleteStatus = 'pending';
        })
        .addCase(deleteRequest.rejected, (state, action) => {
            state.deleteStatus = 'rejected';
        })
        .addCase(deleteRequest.fulfilled, (state, action) => {
            state.deleteStatus = 'fulfilled';
            state.todos = action.payload;
        })
    }
});

export default appSlice.reducer;

export const getStatusSelector = state => (state.todos.getStatus);
export const postStatusSelector = state => (state.todos.postStatus);
export const putStatusSelector = state => (state.todos.putStatus);
export const deleteStatusSelector = state => (state.todos.deleteStatus);
export const todosSelector = state => (state.todos.todos);