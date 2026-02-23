import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/appSlice";

export const store=configureStore({
    reducer:{
        app:appReducer,
    },
})



//Redux store is the central state container and we register reducer inside it.