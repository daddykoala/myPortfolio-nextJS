import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    bgColor:'#ffffff',
    bgColor2:'linear-gradient(130deg, rgba(2,0,36,1) 0%, rgba(247,255,46,1) 0%, rgba(255,91,73,1) 100%)',
    
    fontColor:'#000000',
    fontColor2:'#000000',
};

export const mediaSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setWidth: (state, action) => {

            state.screenWidth = action.payload;
            console.log("Screen Width:", state.screenWidth);

        }
    }
});


export const { setWidth } = mediaSlice.actions;