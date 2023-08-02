import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mediaSlice } from './slice/mediaSlice'



export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    screen:mediaSlice.reducer
  },

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)