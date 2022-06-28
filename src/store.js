import {configureStore } from "@reduxjs/toolkit";
import changeTheNumber from "./reducers/incDec";


// import rootReducer from "./reducers/index";


const store = configureStore({
    reducer:{
        changeTheNumber
     }
});

export default store;