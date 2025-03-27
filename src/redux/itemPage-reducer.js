import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

let initialState = {
    item: null,
    isLoading: false,
    error: null,
};


export const fetchItemById = createAsyncThunk('items/fetchItemById', async ({ id }, { rejectWithValue }) => {
    try {
        const responce = await axios.get(`${API_URL}/${id}`);
        return responce.data;
    } catch {
        return rejectWithValue(error.response?.data || "Помилка завантаження!");
    }
})

export const itemPageReducer = createSlice({
    name: 'itemPage',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemById.pending, (state) => {
                state.item = null;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchItemById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.item = action.payload;
            })
            .addCase(fetchItemById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default itemPageReducer.reducer;