import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

let initialState = {
    items: [],
    length: 50,
    isLoading: false,
    currentPage: 1,
    error: null,
    itemsPerPage: 12,
};


export const fetchItems = createAsyncThunk('items/fetchItems', async ({ page, count }, { rejectWithValue }) => {
    try {
        const responce = await axios.get(`${API_URL}?offset=${(page - 1) * count}&limit=${count}`);
        return responce.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Помилка завантаження!");
    }
});

export const itemsReducer = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
            state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.items = [];
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { setPage } = itemsReducer.actions;

export default itemsReducer.reducer;