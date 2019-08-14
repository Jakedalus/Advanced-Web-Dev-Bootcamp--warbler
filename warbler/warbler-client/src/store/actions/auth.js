import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';

export function setCurrentUser(user) {
  console.log('setCurrentUser:', user);
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function authUser(type, userData) {
  console.log('authUser, /actions/auth.js:', type, userData);
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData)
        .then(({token, ...user}) => {
          console.log('after apiCall:', token, user);
          localStorage.setItem('jwtToken', token);
          dispatch(setCurrentUser(user));
          resolve();
        })
        .catch(err => console.log('ERROR!!', err));
    })
  }
}