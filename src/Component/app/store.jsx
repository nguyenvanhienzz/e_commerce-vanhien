import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';
import userLogin from '../slices/userSlice';
import settingProfile from '../slices/settings';
import paymentCheck from '../slices/payMent';
const store = configureStore({
    reducer: {
        basket: basketReducer,
        user: userLogin,
        settings: settingProfile,
        payments: paymentCheck,
    }
})
export default store