import { createSlice } from '@reduxjs/toolkit';


export const AccoutSettings = createSlice({
    name: 'settings',
    initialState: {
        ProfileVisibility: null,
    },
    reducers: {
        Profile: (state, action) => {
            state.ProfileVisibility = action.payload;
        },
        DeleteProfile: (state) => {
            state.ProfileVisibility = null;
        }
    }
})

export const { Profile, DeleteProfile } = AccoutSettings.actions;
export const selectSetting = state => state.settings.ProfileVisibility;
export default AccoutSettings.reducer;
