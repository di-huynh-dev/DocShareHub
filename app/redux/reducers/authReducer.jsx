import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            token: null,
            currentUser: null,
            isFetching: false,
            error: false,
            addresses: null,
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
        },
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
    },
});

export const { loginSuccess, registerSuccess } = userSlice.actions;
export default authSlice.reducer;
