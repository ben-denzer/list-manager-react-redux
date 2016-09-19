import apiPromise from './apiPromise';

// let apiUrl = 'http://localhost:8000/listApi';
let apiUrl = 'https://bdenzer.xyz/listApi';

export const addItemToDB = (options) => apiPromise(options, apiUrl + '/actions/addItem');
export const checkUsernameDB = (options) => apiPromise(options, apiUrl + '/auth/checkUsername');
export const deleteListDB = (options) => apiPromise(options, apiUrl + '/actions/removeList');
export const loadUserData = (options) => apiPromise(options, apiUrl + '/auth/login');
export const loginWithToken = (options) => apiPromise(options, apiUrl + '/auth/loginWithToken');
export const removeItemsFromDB = (options) => apiPromise(options, apiUrl + '/actions/removeItems');
export const signupDB  = (options) => apiPromise(options, apiUrl + '/auth/signup');
export const toggleCheckDB = (options) => apiPromise(options, apiUrl + '/actions/toggleCheck');
