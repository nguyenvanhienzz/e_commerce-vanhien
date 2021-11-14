import { createSlice } from "@reduxjs/toolkit";

export const Payment = createSlice({
    name: 'payment',
    initialState: {
        checkout: null
    },
    reducers: {
        paymentDetails: (state, action) => {
            state.checkout = { ...state.checkout, ...action.payload };
        },
    }
})
export const { paymentDetails } = Payment.actions;
export const selectpay = state => state.payments.checkout;
export default Payment.reducer;