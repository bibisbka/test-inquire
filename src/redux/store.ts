import {configureStore, combineReducers} from '@reduxjs/toolkit'

import {postsSlice} from './PostsSlice';

const reducer = combineReducers({
  posts: postsSlice.reducer
})

const store = configureStore({reducer})
export default store;

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>