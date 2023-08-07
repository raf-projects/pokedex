import { configureStore } from "@reduxjs/toolkit";
import { pokeSlice } from "./slices/pokeSlice";


const store = configureStore({
    reducer: {
        pokemon: pokeSlice.reducer
    }
});


export default store;