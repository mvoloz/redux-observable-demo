import {
  FETCH_USERS,
  API_SUCCESSFUL
} from '../actionTypes';


export const enableApi = () => ({type: API_SUCCESSFUL})
export const fetchUsers = () => ({type: FETCH_USERS})

/*

export function fetchUpcomingVisits(memberId) {
  const url      = TdApiRoutes.memberConsultations(memberId)
      , params   = { consult_status: 'Upcoming' }
      , response = teladocApi.get(url, params, authToken.get())
      ;

  return {
    type:    FETCH,
    payload: response
  };
}*/
