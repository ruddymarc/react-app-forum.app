import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts.reducer';
import users from './users.reducer';

const rootReducer = combineReducers({
  posts, users,
});

export default rootReducer;
