import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    email: 'Default email',
    password: 'Default Password',
    images: [],
}

export const userSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFields: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.images = action.payload.images;
        }
    }
})

export const { setFields } = userSlice.actions;
export default userSlice.reducer;