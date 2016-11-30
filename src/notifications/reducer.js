import {
  STATUS_OFFLINE
} from '../actionTypes';


const INITIAL_STATE = {

}

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STATUS_OFFLINE:
      console.log('OFFLINE')
      /*debugger;*/
      return {
        ...state,
        showError: true,
        errorMessage: 'STATUS_OFFLINE'
      }

    default:
      return {...state}
  }

}

export default notificationReducer;
