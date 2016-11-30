import RxErrors from './RxErrors';
import { Observable } from 'rxjs';
import Qs from 'qs';

const BASE_HOST = 'http://localhost:4000'

const stringifyParams = (params) =>
  Qs.stringify(params, {arrayFormat: 'brackets'})

const buildUrl = (url, params = null) => {
  let urlParams;
  if (params) {
    urlParams = `/${stringifyParams(params)}`
  }
  return `${BASE_HOST}${url}${urlParams}`
}


/*export const respIntercept = (response) => {
  const sc = response.status
      , rc = _.get(response, 'response.response_code', 0)
      ;

  if (no_response_error(rc) && no_http_error(sc)) {
    return response
  }

  if ((rc === 25) || (rc === 500)) {
    let sysMsg = 'System Error';
    throw new RxErrors(sysMsg)
  }

  // TdWindow.redirect('/logout');

}*/

export const Api = {
  // get(url, params = null) {
  //   // const { headers } = axiosConfig(token)
  //   console.log(url);
  //   return Observable.ajax({url: `${buildUrl(url, params)}`, crossDomain: true, body: params})
  //           .catch((xhr) => {
  //             throw new RxErrors(xhr)
  //           })
  //           // .map(response => rxAuthHandler(response))
  //           .map(payload => {
  //             if (payload.error) {
  //               //some error handling error
  //               throw new RxErrors(payload);
  //             }
  //             return payload
  //           })
  // }
  get(url, params = null){
    return Observable.ajax({url: `${buildUrl(url, params)}`, crossDomain: true, body: params})
      .catch(xhr => {
        throw new RxErrors(xhr)
      })
      .map(payload => {
        debugger;
        return payload
      })
  }
}
