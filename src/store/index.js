import {configureStore} from "@reduxjs/toolkit"
import autoPowerSlice from "../slices/autoPowerSlice";
export const store = configureStore ({
    reducer:{
        autopower: autoPowerSlice
    },
}

);