import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchData = createAsyncThunk('todo/fatchTodo', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data
})

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false,
            state.error = null,
            state.todos = action.payload
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = true,
            state.error = action.error.message,
            state.todos = []
        });
    }
})

export default todosSlice.reducer;

