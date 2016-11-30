import { Observable } from 'rxjs';
// import { teladocApi, authToken, TdApiRoutes, tdApi } from 'app/lib';

/*import {
  FETCH_CONSULT_HISTORY,
  FETCH_UPCOMING_VISITS,
  UPCOMING_VISITS_FULLFILLED,
  UPCOMING_VISITS_ERROR,
  IS_FETCHING
} from './actionTypes';*/


/*const upcomingVisitsFullfilled = payload => ({type: UPCOMING_VISITS_FULLFILLED, payload})
const upcomingVisitsFailed = payload => Observable.of({type: UPCOMING_VISITS_ERROR, payload, error: true})
const isFetching = () => ({type: IS_FETCHING})
const cancellationReasons = (action$, newReason) => action$.ofType('TIMED_OUT', 'AUTH_ERROR', 'GLOBAL_CANCEL', 'TRANSITION_START', newReason)

*/
import {
  FETCH_USERS,
  FETCH_USER_FULFILLED
} from '../actionTypes';


const fetchFullFilled = payload => ({ type: FETCH_USER_FULFILLED, payload })
const fetchFailed = payload => Observable.of({type: FETCH_USERS_FAILED, payload, error: true})
const userFetching = () => ({type: USER_FETCHING})


const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(action => Observable.ajax.getJSON('http://localhost:4000/users'))
      .catch(err => {debugger; return err})
      .map(payload => ({type: FETCH_USER_FULFILLED}))
      .startWith(userFetching())

/*const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS)
    .mergeMap(action => {
      // return Observable.ajax({url: `http://localhost:4000/users`, crossDomain: true})
      return Observable.ajax.getJSON('http://localhost:4000/users')
        .map(payload => ({type: FETCH_USER_FULFILLED: payload }))
        .catch(err => {
          debugger;
          return fetchFailed(err)
        })
        .startWith(userFetching())
      }
    )*/

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
