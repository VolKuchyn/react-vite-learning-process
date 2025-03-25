import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: 'Default Name',
    email: 'Default email',
    password: 'Default Password',
}

export const userSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFields: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { setFields } = userSlice.actions;
export default userSlice.reducer;