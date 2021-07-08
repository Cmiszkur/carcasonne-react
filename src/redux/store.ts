import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import { serverAPI } from './serverAPI'
import { useDispatch } from 'react-redux'
// import postsReducer from './postsReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    [serverAPI.reducerPath]: serverAPI.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(serverAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store