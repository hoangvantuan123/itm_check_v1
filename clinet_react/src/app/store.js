// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import authLoginReducer from '../features/auth/slice/authSlice'

const store = configureStore({
  reducer: {
    auth: authLoginReducer,
  },
})
export default store
