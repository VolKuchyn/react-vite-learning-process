import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

let initialState = {
    items: null,
    isLoading: false,
    error: null,
};


export const fetchItems = createAsyncThunk('items/fetchItems', async (_, { rejectWithValue }) => {
    try {
        const responce = await axios.get(`${API_URL}?offset=0&limit=10`);
        return responce.data;
    } catch {
        return rejectWithValue(error.response?.data || "Помилка завантаження!");
    }
})

export const dndPageReducer = createSlice({
    name: 'dndPage',
    initialState,
    reducers: {
        reorderItems: (state, action) => {
            state.items = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.items = null;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default dndPageReducer.reducer;
export const { reorderItems } = dndPageReducer.actions;