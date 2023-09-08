import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mediaSlice } from './slice/mediaSlice'
import { githubApi } from './slice/githubApi'



export const store = configureStore({
  reducer: {
    
    screen:mediaSlice.reducer,
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(githubApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)