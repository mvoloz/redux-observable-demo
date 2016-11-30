import { Observable } from 'rxjs';
import {Api} from '../lib/api';
import ApiRoutes from '../lib/ApiRoutes';

/*const upcomingVisitsFullfilled = payload => ({type: UPCOMING_VISITS_FULLFILLED, payload})
const upcomingVisitsFailed = payload => Observable.of({type: UPCOMING_VISITS_ERROR, payload, error: true})
const isFetching = () => ({type: IS_FETCHING})
const cancellationReasons = (action$, newReason) => action$.ofType('TIMED_OUT', 'AUTH_ERROR', 'GLOBAL_CANCEL', 'TRANSITION_START', newReason)

*/
import {
  FETCH_USERS,
  FETCH_USER_FULFILLED,
  FETCH_USERS_FAILED,
  STATUS_OFFLINE
} from '../actionTypes';


const fetchFullFilled = payload => ({ type: FETCH_USER_FULFILLED, payload })
const fetchUsersFailed = error => {
  //
  // debugger;
  if (error.message.message === 'ajax error 0') {
    return Observable.of({type: STATUS_OFFLINE})
  }
  return Observable.of({type: FETCH_USERS_FAILED, error, error: true})
}



/*const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(action =>
      Observable.ajax.getJSON(`http://localhost:4000/users`)
        .map(fetchFullFilled)
    )*/

const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(action =>{
      return Api
        .get(ApiRoutes.users())
        .map(payload => fetchFullFilled(payload))
        .catch(e => fetchUsersFailed(e))

    })


export { fetchUsersEpic }

/*const upcomingVisitsEpic = action$ =>
  action$.ofType(FETCH_UPCOMING_VISITS)
    .mergeMap(action =>{
      const { url, params } = action.payload
      return tdApi
              .get(url, params, authToken.get())
              .takeUntil(cancellationReasons(action$, 'FULLFILLED'))
              .map(payload => upcomingVisitsFullfilled(payload))
              .catch(e => upcomingVisitsFailed(e))
              .startWith(isFetching());

    })

export { upcomingVisitsEpic }*/
