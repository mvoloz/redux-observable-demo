import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import { fetchUsersEpic } from './epics/UsersEpic';

import * as actionTypes from './actionTypes';

const epicsRequireApi = [fetchUsersEpic]

const requireApiEpics = (action$, store) =>
  action$.ofType(actionTypes.API_SUCCESSFUL)
    .switchMap(() =>
      combineEpics(...epicsRequireApi)(action$, store)
        .takeUntil(action$.ofType(actionTypes.CANCEL_ALL_API_REQUESTS))
        .catch(err => {
          //debugger;
          return Observable.of({type: actionTypes.CANCEL_ALL_API_REQUESTS, err,  error: true})
        })
  )

const onlineStatusRequred = [requireApiEpics]

const onLineEpics = (action$, store) =>
  action$.ofType(actionTypes.STATUS_ONLINE)
    .switchMap(()=>
      combineEpics(...onlineStatusRequred)(action$, store)
        .takeUntil(action$.ofType(actionTypes.STATUS_OFFLINE))
        .retryWhen(err => window.navigator.onLine ? Observable.timer(1000) : Observable.fromEvent(window, "online"))
  )

export const rootEpic = combineEpics(requireApiEpics, onLineEpics);

export default rootEpic;
