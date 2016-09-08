import apiPromise from './apiPromise';

let apiUrl = 'http://localhost:8000/listApi';
// let apiUrl = 'https://bdenzer.xyz/listApi';

export const loadUserData = (options) => apiPromise(options, apiUrl + '/auth/login');
export const signupDB  = (options) => apiPromise(options, apiUrl + '/auth/signup');
export const addItemToDB = (options) => apiPromise(options, apiUrl + '/actions/addItem');
export const removeItemFromDB = (options) => apiPromise(options, apiUrl + '/actions/removeItem');
export const toggleCheckDB = (options) => apiPromise(options, apiUrl + '/actions/toggleCheck');
export const deleteListDB = (options) => apiPromise(options, apiUrl + '/actions/removeList');
export const checkUsernameDB = (options) => apiPromise(options, apiUrl + '/auth/checkUsername');
