import { toastr } from 'react-redux-toastr'
import axios from 'axios'
const BASE_URL = 'http://localhost:3004/api'
export function login(values) {
  return submit(values, `${BASE_URL}/login`)
}
export function signup(values) {
  return submit(values, `${BASE_URL}/signup`)
}
function submit(values, url) {
  return dispatch => {
  axios.post(url, values)
  .then(resp => {
  dispatch([
  
  {type: 'USER_FETCHED', payload: resp.data}
  ])
  })
  .catch(e => {
  e.response.data.errors.forEach(
  error => toastr.error('Erro', error))
  })
  }
}


export function logout() {
    return {type: 'TOKEN_VALIDATED', payload: false}
  }
  export function validateToken(token) {
    return {type: 'TOKEN_VALIDATED', payload: true}
  }
  
