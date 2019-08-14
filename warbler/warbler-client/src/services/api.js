import axios from 'axios';

export function apiCall(method, path, data) {
  console.log('apiCall:', method, path, data);
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(res => {
        console.log('resolving:', res);
        return resolve(res.data);
      })
      .catch(err => {
        console.log('rejecting:', err);
        return reject(err.response.data.error);
      });
  });
}