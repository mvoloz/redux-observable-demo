
import {
  FETCH_USERS,
  FETCH_USER_FULFILLED
}  from '../actionTypes';

const INITIAL_STATE = {
  users: [],
};


const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USERS:
      console.log('FETCHING')
      return {...state}
    case FETCH_USER_FULFILLED:
      return {...state}
    default:
      return {...state}
  }
}

export default usersReducer;
