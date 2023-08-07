import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../models/Pokemon";


export const pokeSlice = createSlice({
    name: "pokemon",
    initialState: {} as Pokemon,
    reducers: {
        setPokemon(state, param){
            state.name = param.payload.name;
            state.sprites = param.payload.sprites;
            state.moves = param.payload.moves;
        }
    }
});


export const pokeActions = pokeSlice.actions;