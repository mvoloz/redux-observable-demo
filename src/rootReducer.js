import { combineReducers }        from 'redux';

import usersReducer from './users/UsersReducer';
import notificationReducer from './notifications/reducer.js'


export const rootReducer = combineReducers({
  usersReducer,
  notificationReducer
});

export default rootReducer;
