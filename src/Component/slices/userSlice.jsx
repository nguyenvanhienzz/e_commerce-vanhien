import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'login',
    initialState: {
        users: [],
        login: null,
        orders: []
    },
    reducers: {
        LognIn: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        Account: (state, action) => {
            state.login = action.payload;
        },
        LognOut: (state) => {
            state.login = null;
        },
        Orders: (state, action) => {
            state.orders = [...state.orders, action.payload];
        }
    }
})
export const { LognIn, LognOut, Account, Orders } = userSlice.actions;
export const selectlogin = state => state.user.users;
export const selectAccout = state => state.user.login;
export const selectOrder = state => state.user.orders;
export default userSlice.reducer;