import {configureStore} from '@reduxjs/toolkit';
import settingsReducer from "./slice/settingsSlice"

const store = configureStore({
    reducer:{
        settings: settingsReducer,
    },
});
export default store;