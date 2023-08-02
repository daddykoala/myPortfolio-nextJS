import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
};

export const mediaSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setWidth: (state, action) => {
            state.screenWidth = action.payload;
            console.log(state.screenWidth); 
        }
    }
});


export const { setWidth } = mediaSlice.actions;